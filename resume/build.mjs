// Builds the resume PDFs from resume.html using headless Chrome or Edge.
//
//   node resume/build.mjs                       -> public/Julie-Exel-Resume.pdf (no phone; served on the site)
//   RESUME_PHONE="555-555-5555" node resume/build.mjs
//                                               -> also resume/private/Julie-Exel-Resume-Phone.pdf (gitignored)

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((p) => existsSync(p));
if (!browser) throw new Error('No Chrome or Edge found. Set CHROME_PATH.');

const template = readFileSync(join(here, 'resume.html'), 'utf8');

// On Windows the browser can exit before the PDF is written, so wait for it to settle.
function waitForFile(path, timeoutMs = 30000) {
  const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  const start = Date.now();
  let last = -1;
  while (Date.now() - start < timeoutMs) {
    if (existsSync(path)) {
      const size = statSync(path).size;
      if (size > 0 && size === last) return;
      last = size;
    }
    sleep(300);
  }
  throw new Error('Timed out waiting for ' + path);
}

function render(html, outPdf) {
  const tmpHtml = join(tmpdir(), `resume-${Date.now()}.html`);
  writeFileSync(tmpHtml, html);
  mkdirSync(dirname(outPdf), { recursive: true });
  rmSync(outPdf, { force: true });
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    // A throwaway profile stops it from handing off to an already-running browser.
    `--user-data-dir=${join(tmpdir(), `resume-profile-${Date.now()}`)}`,
    `--print-to-pdf=${outPdf}`,
    pathToFileURL(tmpHtml).href,
  ], { stdio: 'ignore' });
  waitForFile(outPdf);
  console.log('Wrote', outPdf);
}

render(template.replace('<!--PHONE-->', ''), join(root, 'public', 'Julie-Exel-Resume.pdf'));

const phone = process.env.RESUME_PHONE;
if (phone) {
  render(
    template.replace('<!--PHONE-->', `${phone} | `),
    join(here, 'private', 'Julie-Exel-Resume-Phone.pdf')
  );
}

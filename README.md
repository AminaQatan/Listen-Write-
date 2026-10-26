# English: Zero to Hero

Created for Ms. Amina Qatan. Complete editable app, ready for GitHub Pages.

## Upload to GitHub Pages

1. Extract this ZIP on your phone or computer.
2. Create a new **public** GitHub repository. Suggested name: `English-Zero-to-Hero`.
3. Upload the extracted files and the entire `assets` folder to the repository root. Upload the contents, not the ZIP itself and not an extra enclosing folder.
4. Confirm that `index.html`, `app.js`, `dictation.js`, `content.js`, `style.css`, and `assets` appear together on the repository's first page. Commit the files to `main`.
5. Open **Settings → Pages**.
6. Choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
7. Wait for GitHub to finish publishing. Open the site link shown in **Settings → Pages**.

Official GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The included empty `.nojekyll` file tells GitHub to serve this as a static site. No build command, dependency installation, database, or API key is needed. This version runs directly on GitHub Pages and does not require a ChatGPT login.

## Listen & write

Tap **Listen & write**, select a stage, then tap **Hear the sentence**. Type it in the empty answer box and check your answer. Slow replay is available. The model sentence stays hidden until a correct answer or the third unsuccessful attempt. Each new sentence starts with a blank box.

There are 36 sentence dictations across six stages, in addition to the original 36 mixed-skill lessons, 216 challenges, alphabet room, and vocabulary review.

## Included files

- `index.html`: the app page and navigation.
- `style.css`: layout, colours, mobile styles, and printing.
- `content.js`: original lesson content and alphabet cards.
- `dictation.js`: dedicated listen-and-write mode, based on the example sentences in `content.js`.
- `app.js`: lesson engine, settings, browser speech, local progress, and sound effects.
- `assets/adventure.png`: complete original illustration used by the app.
- `.nojekyll`: static publishing marker.

All runtime source code is plain, editable HTML, CSS, and JavaScript. Keep filenames and the `assets` folder structure unchanged unless you update their references in the code.

## Audio and saved progress

Speech uses English voices supplied by the browser/device, preferring British English when available. Choose a voice under **Voice settings** and use **Try the voice**. There are no separate recorded MP3 files: sentence audio is generated at playback, and sound effects are generated locally. Some installed speech voices may need internet access. If you hear nothing, enable an English text-to-speech voice on your device and try Chrome or another supported browser.

Audio controls are implemented, but audible speech could not be verified in the remote test browser. Blank answer boxes, correct-answer checking, next-sentence clearing, and third-attempt reveals were verified in browser testing.

Progress is stored only on the current browser/device. Existing progress on the previous website will not automatically transfer to the new GitHub address. No database or learner records are included in this ZIP.

## Run locally

Open `index.html` in a modern browser, or serve the folder with:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080. Speech and browser storage support can differ when opening files directly; use the hosted GitHub Pages link for normal use.

## Learning scope

This is guided practice from basic English to more confident communication. Stage badges and scores are practice milestones, not formal English proficiency qualifications. Speaking activities are self-assessed and do not record the learner's voice.

## Artwork

`assets/adventure.png` is an original AI-generated educational illustration created for this app. It is included locally; the app does not fetch the illustration from another website.

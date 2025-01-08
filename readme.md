# WIP Merge Blocker

## Description

**WIP Merge Blocker** is a browser extension that blocks the merging of Pull Requests (PRs) in "WIP" (Work In Progress) status on GitHub. When an attempt is made to merge a PR with the "WIP" label, a modal window with a warning and an image of Tucu is displayed.

## Installation

1. Clone this repository or download the files.
2. Open your browser and go to the extensions page (`chrome://extensions/` in Chrome).
3. Enable "Developer mode".
4. Click on "Load unpacked" and select the folder where you downloaded the files.

## Usage

1. Navigate to any PR on GitHub.
2. If the PR has the "WIP" label, attempting to merge it will display a warning modal window.

## Files

### `manifest.json`

This file defines the extension's configuration, including the necessary permissions and the scripts that will run on GitHub pages.

### `content.js`

This script runs on GitHub PR pages and performs the following actions:
- Detects if the PR has the "WIP" label.
- Blocks the merge button if the "WIP" label is present.
- Displays a modal window with a warning and an image of Tucu.

## Contributions

Contributions are welcome. Please open an issue or a pull request to discuss any changes you would like to make.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
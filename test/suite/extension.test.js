const assert = require("assert");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require("vscode");
const { format } = require("../../convert");

suite("Format text", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Single paragraph with single sentence.", () => {
    assert.strictEqual(
      format(`
The interest attaching to the valley of the
Euphrates and Tigris is of the widest
kind; and, excepting the land of Pales-
tine, no other part of the globe can com-
pare with it in the importance of traditions, its
history, and its monuments.
		  `),
      "The interest attaching to the valley of the Euphrates and Tigris is of the widest kind; and, excepting the land of Palestine, no other part of the globe can compare with it in the importance of traditions, its history, and its monuments."
    );
  });

  test("Single paragraph with some sentences.", () => {
    assert.strictEqual(
      format(`
        EVERYONE has some bent or inclintaion
        which, if fostered by favourable circum-
        stances, will colour the rest of life. My
        own taste has always been for Oriental
        studies, and from my youth I have taken a great
        interest in Eastern explorations and dicoveries,
        particlularly in the great work in whic Layard and
        Rawlinson were engaged.
			  `),
      "EVERYONE has some bent or inclintaion which, if fostered by favourable circumstances, will colour the rest of life. My own taste has always been for Oriental studies, and from my youth I have taken a great interest in Eastern explorations and dicoveries, particlularly in the great work in whic Layard and Rawlinson were engaged."
    );
  });

  test("some paragraph with some sentences.", () => {
    assert.strictEqual(
      format(`
          My next discoveries were in the field of early
        Babylonian history, and these were published in the
        first volume of the "Transaction of the Society of
        Binlival Archaeology."
          In 1872, I had the good fortune to make a far
        more interesting discovery, namely, that of the tablets
        containing the Chaldean account of the deluge. The
        first flagment I discovered containd about half of
        the account: it was the largest single fragment of
        these legends.
			  `),
      'My next discoveries were in the field of early Babylonian history, and these were published in the first volume of the "Transaction of the Society of Binlival Archaeology."\nIn 1872, I had the good fortune to make a far more interesting discovery, namely, that of the tablets containing the Chaldean account of the deluge. The first flagment I discovered containd about half of the account: it was the largest single fragment of these legends.'
    );
  });
});

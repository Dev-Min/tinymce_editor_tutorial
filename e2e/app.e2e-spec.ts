import { TinymceEditorTutorialPage } from './app.po';

describe('tinymce-editor-tutorial App', function() {
  let page: TinymceEditorTutorialPage;

  beforeEach(() => {
    page = new TinymceEditorTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

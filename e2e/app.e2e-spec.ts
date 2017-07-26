import { TrainingAngAppPage } from './app.po';

describe('training-ang-app App', () => {
  let page: TrainingAngAppPage;

  beforeEach(() => {
    page = new TrainingAngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

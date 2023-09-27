import { newE2EPage } from '@stencil/core/testing';

describe('todo-task-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<todo-task-card></todo-task-card>');

    const element = await page.find('todo-task-card');
    expect(element).toHaveClass('hydrated');
  });
});

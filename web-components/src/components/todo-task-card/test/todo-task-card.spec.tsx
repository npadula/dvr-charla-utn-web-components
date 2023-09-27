import { newSpecPage } from '@stencil/core/testing';
import { TodoTaskCard } from '../todo-task-card';

describe('todo-task-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TodoTaskCard],
      html: `<todo-task-card></todo-task-card>`,
    });
    expect(page.root).toEqualHtml(`
      <todo-task-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </todo-task-card>
    `);
  });
});

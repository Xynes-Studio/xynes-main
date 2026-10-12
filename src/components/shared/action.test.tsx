import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Action } from './action';

describe('Action', () => {
  it('uses native crawlable links for known destinations', () => {
    render(<Action destination="code">See our code</Action>);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/Xynes-Studio',
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  it('keeps primary links accessible without the decorative arrow', () => {
    const { container } = render(
      <Action destination="explore" variant="primary">
        Explore
      </Action>,
    );
    expect(screen.getByRole('link', { name: 'Explore' })).toHaveAttribute(
      'href',
      '#cms',
    );
    expect(container.querySelector('[aria-hidden]')).toBeNull();
  });
  it('opens honest pending feedback with Enter, closes with Escape and retains focus', async () => {
    const user = userEvent.setup();
    render(<Action destination="cms">Try Xynes CMS</Action>);
    const button = screen.getByRole('button');
    await user.tab();
    expect(button).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('status')).toHaveTextContent(
      'The Xynes CMS destination is being prepared.',
    );
    expect(button).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('x');
    expect(screen.getByRole('status')).toBeVisible();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveFocus();
  });
  it('toggles primary pending feedback without creating a fake link', async () => {
    const user = userEvent.setup();
    render(
      <Action destination="contact" variant="primary">
        Reach Out
      </Action>,
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(screen.getByRole('status')).toHaveTextContent(
      'The contact destination is being prepared.',
    );
    await user.click(button);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});

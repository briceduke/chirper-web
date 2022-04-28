import { screen } from '@testing-library/react';
import React from 'react';

import { App } from './App';
import { render } from './util/global/test-utils';

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn chakra/i);
	expect(linkElement).toBeInTheDocument();
});

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './mocks/server';

// Set up API mocking before all tests
beforeAll(() => server.listen());

// Reset any request handlers that are added during a test
afterEach(() => server.resetHandlers());

// Clean up after all tests are finished
afterAll(() => server.close());
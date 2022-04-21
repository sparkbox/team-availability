/**
 * @jest-environment node
 */

import { join } from 'path';
import { runSass } from 'sass-true';

const sassFile = join(__dirname, 'functions_test.scss');
runSass({file: sassFile}, {describe, it});

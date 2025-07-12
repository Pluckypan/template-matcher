import { providerRegistry } from '@computer-use/nut-js';
import TemplateMatchingFinder from './lib/templateMatchingFinder';

const finder = new TemplateMatchingFinder();

providerRegistry.registerImageFinder(finder);

export default finder;

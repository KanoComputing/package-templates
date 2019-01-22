/* globals fixture, suite, test, assert */

import './kwc-template.js';

const basic = fixture`
    <kwc-template></kwc-template>
`;

suite('kwc-template', () => {
    test('instanciate', () => {
        const element = basic();
        assert(element instanceof customElements.get('kwc-template'));
    });
});

import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {NavBarDropdown} from 'webmud/components/nav/navbarDropdown';

describe('<NavBarDropdown />', function() {
    it('renders the expected label', function() {
        const wrapper = shallow(<NavBarDropdown labelKey="dropdown.label"></NavBarDropdown>);
        const brandingMessage = wrapper.find('.dropdown .dropdown-toggle Message');
        expect(brandingMessage).to.have.length(1);
        expect(brandingMessage).to.have.prop('message', 'dropdown.label');
    });

    describe('With no children', function() {
        const wrapper = shallow(<NavBarDropdown labelKey="dropdown.label"></NavBarDropdown>);

        it('renders the expected children', function() {
            expect(wrapper.find('.dropdown .dropdown-menu')).to.be.empty;
        });
    });

    describe('With simple children', function() {
        const wrapper = shallow(<NavBarDropdown labelKey="dropdown.label"><span></span><span></span></NavBarDropdown>);

        it('renders the expected children', function() {
            expect(wrapper.find('.dropdown .dropdown-menu')).to.have.exactly(2).descendants('span');
        });
    });
});

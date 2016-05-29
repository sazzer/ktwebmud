import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {NavBar} from 'webmud/components/nav/navbar';

describe('<NavBar />', function() {
    it('renders the expected branding', function() {
        const wrapper = shallow(<NavBar brandKey="branding"></NavBar>);
        const brandingMessage = wrapper.find('.navbar .container-fluid .navbar-header .navbar-brand Message');
        expect(brandingMessage).to.have.length(1);
        expect(brandingMessage).to.have.prop('message', 'branding');
    });

    describe('With no children', function() {
        const wrapper = shallow(<NavBar brandKey="branding"></NavBar>);

        it('renders the expected children', function() {
            expect(wrapper.find('.navbar .container-fluid .test-navbar-child-container')).to.be.empty;
        });
    });

    describe('With simple children', function() {
        const wrapper = shallow(<NavBar brandKey="branding"><span></span><span></span></NavBar>);

        it('renders the expected children', function() {
            expect(wrapper.find('.navbar .container-fluid .test-navbar-child-container')).to.have.exactly(2).descendants('span');
        });
    });
});

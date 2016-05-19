import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {MainScreen} from 'webmud/ui/main';

describe('<MainScreen />', function() {
    it('renders the expected elements', function() {
        const wrapper = shallow(<MainScreen />);
        expect(wrapper.find('.main')).to.have.length(1);
        expect(wrapper.find('.main .header')).to.have.length(1);
        expect(wrapper.find('.main .body')).to.have.length(1);
        expect(wrapper.find('.main .footer')).to.have.length(1);
    });
});

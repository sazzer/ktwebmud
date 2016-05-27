import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {SocialLoginLinks} from 'webmud/ui/header/socialLoginLinks';

describe('<SocialLoginLinks />', function() {
    describe('With no links', function() {
        const links = {
        };
        const wrapper = shallow(<SocialLoginLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('div')).to.be.empty;
        });
    });

    describe('With one link', function() {
        const links = {
            'facebook': 'http://www.facebook.com'
        };
        const wrapper = shallow(<SocialLoginLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('div')).to.have.exactly(1).descendants('SocialLoginButton');
            expect(wrapper.find('div SocialLoginButton')).to.have.prop('name', 'facebook');
        });
    });

    describe('With several links', function() {
        const links = {
            'facebook': 'http://www.facebook.com',
            'google': 'http://plus.google.com',
            'twitter': 'http://www.twitter.com'
        };
        const wrapper = shallow(<SocialLoginLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('div')).to.have.exactly(3).descendants('SocialLoginButton');
        });
        it('renders in the correct order', function() {
            expect(wrapper.find('div SocialLoginButton').at(0)).to.have.prop('name', 'facebook');
            expect(wrapper.find('div SocialLoginButton').at(1)).to.have.prop('name', 'google');
            expect(wrapper.find('div SocialLoginButton').at(2)).to.have.prop('name', 'twitter');
        });
    });
});

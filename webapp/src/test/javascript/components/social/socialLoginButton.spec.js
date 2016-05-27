import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {SocialLoginButton} from 'webmud/components/social/socialLoginButton';

describe('<SocialLoginButton />', function() {
    describe('rendering', function() {
        const wrapper = shallow(<SocialLoginButton name="twitter" />);

        it('renders the correct markup', function() {
            expect(wrapper.find('li a')).to.have.className('btn');
            expect(wrapper.find('li a')).to.have.className('btn-block');
            expect(wrapper.find('li a')).to.have.className('btn-social');
            expect(wrapper.find('li a')).to.have.className('btn-twitter');
            expect(wrapper.find('li a span')).to.have.className('fa');
            expect(wrapper.find('li a span')).to.have.className('fa-twitter');
        });

        it('renders the correct label', function() {
            expect(wrapper.find('li a Message')).to.have.prop('message', 'social.login.twitter');
        });
    });
});

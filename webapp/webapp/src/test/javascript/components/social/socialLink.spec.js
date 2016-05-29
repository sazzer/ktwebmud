import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {SocialLink} from 'webmud/components/social/socialLink';

describe('<SocialLink />', function() {
    describe('rendering', function() {
        const wrapper = shallow(<SocialLink name="twitter" />);

        it('renders the correct markup', function() {
            expect(wrapper.find('span')).to.have.className('fa');
            expect(wrapper.find('span')).to.have.className('fa-twitter');
        });

        it('renders the correct label', function() {
            expect(wrapper.find('Message')).to.have.prop('message', 'social.names.twitter');
        });
    });
});

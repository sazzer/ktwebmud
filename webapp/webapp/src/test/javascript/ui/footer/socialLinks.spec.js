import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {SocialLinks} from 'webmud/ui/footer/socialLinks';

describe('<SocialLinks />', function() {
    describe('With no links', function() {
        const links = {
        };
        const wrapper = shallow(<SocialLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('ul')).to.have.className('list-inline');
            expect(wrapper.find('ul')).to.have.className('text-center');
            expect(wrapper.find('ul')).to.be.empty;
        });
    });

    describe('With one link', function() {
        const links = {
            'facebook': 'http://www.facebook.com'
        };
        const wrapper = shallow(<SocialLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('ul')).to.have.className('list-inline');
            expect(wrapper.find('ul')).to.have.className('text-center');
            expect(wrapper.find('ul')).to.have.exactly(1).descendants('li');
            expect(wrapper.find('ul li SocialLink')).to.have.prop('name', 'facebook');
        });
    });

    describe('With several links', function() {
        const links = {
            'facebook': 'http://www.facebook.com',
            'twitter': 'http://www.twitter.com',
            'google': 'http://plus.google.com'
        };
        const wrapper = shallow(<SocialLinks links={links} />);
        it('renders correctly', function() {
            expect(wrapper.find('ul')).to.have.className('list-inline');
            expect(wrapper.find('ul')).to.have.className('text-center');
            expect(wrapper.find('ul')).to.have.exactly(3).descendants('li');
        });
        it('renders in the correct order', function() {
            expect(wrapper.find('ul li SocialLink').at(0)).to.have.prop('name', 'facebook');
            expect(wrapper.find('ul li SocialLink').at(1)).to.have.prop('name', 'twitter');
            expect(wrapper.find('ul li SocialLink').at(2)).to.have.prop('name', 'google');
        });
    });
});

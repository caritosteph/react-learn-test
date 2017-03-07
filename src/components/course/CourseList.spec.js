import expect from 'expect';
import React from 'react';
import CourseList from './CourseList.js';
import { shallow } from 'enzyme';

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseList {...props} />);
}

describe('CourseList via enzime', ()=>{
  it('should be ...', () => {
    const wrapper = setup(false);
    const actual = wrapper.find('table').length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
});

import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import createCourse from '../../actions/CourseActions';
import CourseList from  './CourseList';

class CoursesPage extends Component {

  constructor(props, context){
    super(props, context);

    // this.state = {
    //   course: { title: null }
    // };

    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(e){
  //   const course = this.state.course;
  //   course.title = e.target.value;
  //   this.setState({course});
  // }

  // onClickSave() {
  //   this.props.createCourse(this.status.course);
  // }

  courseRow(course, index) {
    return <div key = {index}>{course}</div>;
  }
  render() {
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses = {courses}/>
        {/*<h2>Add Course</h2>
        <input
          type = ""
          onChange = {this.onTitleChange}
          value = {this.state.course.title} />
        <input
          type = "submit"
          value = "Save"
          onClick = {this.onClickSave} />*/}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
     courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    createCourse: course =>  dispatch(createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

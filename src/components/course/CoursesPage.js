import React, { Component, PropTypes} from 'react';

class CoursesPage extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: null }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e){
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course});
  }

  onClickSave(){
    console.log("Save");
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type = ""
          onChange = {this.onTitleChange}
          value = {this.state.course.title} />
        <input
          type = "submit"
          value = "Save"
          onClick = {this.onClickSave} />
      </div>
    );
  }
}
CoursesPage.propTypes = {

};
export default CoursesPage;

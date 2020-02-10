/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: '',
      task: '',
      start_date: '',
      supposed_end_date: '',
      rate: '',
      stage: '',
      status: '',
      percent: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })    
  }

  handleSubmit = async (e) => {
    // e.preventDefault()

    const { task, start_date, supposed_end_date, rate, stage, status, percent, end_date } = this.state;
    
    // API call
    const data = { task, start_date, supposed_end_date, rate, stage, status, percent, end_date };
    console.log(data);
    try {
                let result = await axios({ method : 'PUT', url: `http://localhost:5000/kpis/${this.props.kpi._id}`, data });

                console.log("id", this.props.kpi._id)
                console.log("result", result)
    } catch(e) { console.log(e) }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.kpi._id !== prevProps.kpi._id) {
      const { task, start_date, supposed_end_date, rate, stage, status, percent } = this.props.kpi
      this.setState({ task, start_date, supposed_end_date, rate, stage, status, percent });
    }
  }

  render() {
    const { task, start_date, supposed_end_date, rate, stage, status, percent } = this.state

    return (        
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update KPI</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input 
                                        type="text"
                                        className="form-control" 
                                        // placeholder="Task" 
                                        name="task"              
                                        value={task}
                                        onChange={this.handleChange}
                                         />
                                    </div>
                                    <div  className="d-flex">
                                        <div className="form-group">
                                            <label>Start Date</label>
                                            <input 
                                            type="date" 
                                            className="form-control-sm"
                                            name="start_date"
                                            defaultValue={start_date}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group ml-1">
                                            <label>Supposed End Date</label>
                                            <input 
                                            type="date" 
                                            className="form-control-sm" 
                                            name="supposed_end_date"
                                            defaultValue={supposed_end_date}
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group ml-1">
                                            <label>Percent</label>
                                            <select 
                                                className="form-control-sm"
                                                name="percent"
                                                value={percent}
                                                onChange={this.handleChange}
                                                >
                                                <option value="0">0%</option>
                                                <option value="25">25%</option>
                                                <option value="50">50%</option>
                                                <option value="75">75%</option>
                                                <option value="100">100%</option>
                                            </select>   
                                        </div>
                                    </div>
                                    <div  className="d-flex">
                                            <select 
                                                className="form-control"
                                                name="stage"
                                                value={stage}
                                                onChange={this.handleChange}
                                                >
                                                <option>-- Stage --</option>
                                                <option value="Not Started">Not Started</option>
                                                <option value="Requirement Gathering">Requirement Gathering</option>
                                                <option value="In Production">In Production</option>
                                                <option value="Rounding up">Rounding up</option>
                                                <option value="Complete">Complete</option>
                                            </select>
                                            <select 
                                                className="form-control mx-2"
                                                name="status"
                                                value={status}
                                                onChange={this.handleChange}
                                                >
                                                    <option>-- Status --</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Done">Done</option>
                                            </select>
                                    </div>
                                    <div>
                                      <label>
                                        <input 
                                            type="radio" 
                                            name="rate"
                                            value="0"
                                            checked={rate == "0"}
                                            onChange={this.handleChange}
                                        /> Not Started
                                      </label>
                                      <br />
                                      <label>
                                        <input 
                                            type="radio" 
                                            name="rate"
                                            value="25"
                                            checked={rate == "25"}
                                            onChange={this.handleChange}
                                        /> Requirement Gathering
                                      </label>
                                      <br />
                                      <label>
                                        <input 
                                            type="radio" 
                                            name="rate"
                                            value="50"
                                            checked={rate == "50"}
                                            onChange={this.handleChange}
                                        /> In Production
                                      </label>
                                      <br />
                                      <label>
                                        <input 
                                            type="radio" 
                                            name="rate"
                                            value="75"
                                            checked={rate == "75"}
                                            onChange={this.handleChange}
                                        /> Rounding Up
                                      </label>
                                      <br />
                                      <label>
                                        <input 
                                            type="radio" 
                                            name="rate"
                                            value="100"
                                            checked={rate == "100"}
                                            onChange={this.handleChange}
                                        /> Complete!
                                      </label>
                                      <p>Your gender: {rate}mmm</p>
                                    </div>
                                    <div className="modal-footer mt-2">
                                        <button 
                                          type="submit" 
                                          className="btn btn-primary" 
                                          >Save changes</button>
                                    </div>
                                </form>
              </div>
            </div>
          </div>
        </div>        
     );
}
}
export default UpdateForm;
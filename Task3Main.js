import React, { useState } from 'react'

const Task3Main = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ header: '', details: '' });

  const addSection = (e) => {
    e.preventDefault()
    setSections(prevSections => [...prevSections, { header: newSection.header, details: newSection.details }]);
    setNewSection({ header: '', details: '' });
  };

  return (
    <div className="row m-4">
      <div className="col-sm-5 border p-4 border-primary">
        <h1>Add Section</h1>
        <form onSubmit={addSection}>
          <div className="section-header">
            <label htmlFor="header">Section Header</label>
            <input id="header" name="header" className="form-control" value={newSection.header} onChange={e => setNewSection({ ...newSection, header: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="sectionDetails">Section Details</label>
            <textarea id="sectionDetails" name="details" className="form-control" cols="10" value={newSection.details} onChange={e => setNewSection({ ...newSection, details: e.target.value })}></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary col-sm-12">Add</button>
          </div>
        </form>
      </div>
      <div className="col-sm-7">
        <div>
          {sections.map((item, i) => (
            <div key={i} >
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id={`headingOne${i}`}>
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapseOne${i}`} aria-expanded="false" aria-controls={`collapseOne${i}`}>
                        {item.header}
                      </button>
                    </h2>
                  </div>

                  <div id={`collapseOne${i}`} className="collapse" aria-labelledby={`headingOne${i}`} data-parent="#accordionExample">
                    <div className="card-body">
                      {item.details}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Task3Main
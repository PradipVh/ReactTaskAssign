import React, { useState } from "react";

function FormGrp() {
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
    const[showEmailIdInput, setEmailIdInput] = useState(false);
    const handlePhoneNumber = () => {
        const classList = localStorage.classList;
        if (classList) {
            classList.remove("d-none");
        }
        setShowPhoneNumberInput(true);
        setEmailIdInput(false)

    };
    const handleEmailId = () => {
        const classList = localStorage.classList;
        if (classList) {
            classList.remove("d-none")
        }
        setEmailIdInput(true)
        setShowPhoneNumberInput(false);

    }

    return (
        <div className="container border p-4">
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <label>FirstName</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col-sm-6">
                        <label>LastName</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="col-sm-6 form-group pt-3">
                        <label>How should we contact you?</label>
                        <div className="dropdown">
                            <div className="dropdown-toggle form-control dropdown-toggle" type="text" data-toggle="dropdown" aria-expanded="false">
                                Choose Option
                            </div>
                            <div className="dropdown-menu">
                                <a onClick={handlePhoneNumber} className="dropdown-item" href="#">Phone</a>
                                <a onClick={handleEmailId} className="dropdown-item" href="#">Email</a>
                            </div>
                        </div>
                    </div>
                    {showPhoneNumberInput ? (
                        <div className="col-sm-6 pt-3">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Phone number" />
                        </div>) : null}
                    {showEmailIdInput && (<div className="col-sm-6 pt-3">
                        <label>Email Id</label>
                        <input type="email" className="form-control" placeholder="Email Id" />
                    </div>)}
                </div>
            </form>
        </div>
    );
}

export default FormGrp;

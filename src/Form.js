const Form = () => {
    return (
        <div className="form-component">
            <form className="form">
                <input type="email" placeholder="Enter your email" />
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
            <div>
                *You will receive updates on our website launch and the latest
                news as we continue to develop and enhance our offerings.
            </div>
        </div>
    );
};

export default Form;

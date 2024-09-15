const Form = () => {
    return (
        <div className="form-component">
            <form className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;

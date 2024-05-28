import "./index.css";
import "./footer.css";

function Footer() {



    return (
        <div id="footer" className="footer flex flex-col items-center">
            <div>
                <div className="footerHeader">
                    <h1 className="footerTitle">Questions? Inquiries?</h1>
                </div>
            </div>
            <div>
                <div className="form footerContainer">
                    <form className="form flex flex-col items-center">
                        <label for="Email">Email:</label>
                        <input type="text" id="Email" name="Email"></input>
                        <label for="Subject">Subject:</label>
                        <input type="text" id="Subject" name="Subject"></input>
                        <label for="Message">Message:</label>
                        <textarea id="Message" name="Message"></textarea>
                        <button className="sendButton mt-4 portfolioCaption text-black bg-white font-bold py-2 px-2 rounded-full">Send</button>
                    </form>
                    <p>Pssstt... This form doesn't work because I don't have the proper infrastructure, for inquiries -- contact me at struo025@ucr.edu.</p>
                </div>
            </div>
        </div>
    );
}


export default Footer;
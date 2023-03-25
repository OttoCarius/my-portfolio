import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="title-1">Contacts</h1>
        </motion.div>
        <ul className="content-list">
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Location</h2>
              <p>Kyiv, Ukraine</p>
            </motion.div>
          </li>
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Telephone / Telegram</h2>
              <p>
                <a href="tel:+380981161766">+38(098)-116-17-66</a>
              </p>
            </motion.div>
          </li>
          <li className="content-list__item">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:ottocarius1993@gmail.com">
                  ottocarius1993gmail.com
                </a>
              </p>
            </motion.div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;

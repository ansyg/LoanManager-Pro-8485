import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold text-primary-600 mb-4"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-gray-700 mb-8"
        >
          Page Not Found
        </motion.p>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/"
            className="bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
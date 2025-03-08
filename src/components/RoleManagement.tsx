import { FC } from 'react';
import { motion } from 'framer-motion';
import { roles } from '../config/permissions';
import { FiShield, FiCheck, FiX } from 'react-icons/fi';

const RoleManagement: FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Role Management</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <FiShield className="w-6 h-6 text-primary-600 mr-2" />
              <h2 className="text-xl font-semibold">{role.name}</h2>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-500">Permissions:</h3>
              {role.permissions.map((permission) => (
                <div key={permission.id} className="flex items-center text-sm">
                  <FiCheck className="w-4 h-4 text-green-500 mr-2" />
                  <span>{permission.name}</span>
                </div>
              ))}
              
              {permissions.filter(p => !role.permissions.some(rp => rp.id === p.id))
                .map((permission) => (
                  <div key={permission.id} className="flex items-center text-sm text-gray-400">
                    <FiX className="w-4 h-4 text-red-500 mr-2" />
                    <span>{permission.name}</span>
                  </div>
                ))
              }
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoleManagement;
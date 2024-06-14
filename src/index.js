import React, { useState } from 'react';

const SelectComponent = () => {
  const [department, setDepartment] = useState('');

  return (
    <div>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>
    </div>
  );
};

export default SelectComponent;

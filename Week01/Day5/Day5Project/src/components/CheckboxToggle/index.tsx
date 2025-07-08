import { useState } from 'react';

export default function CheckboxToggle() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Toggle me
      </label>
      <p>Checkbox is: {checked ? 'checked' : 'unchecked'}</p>
    </div>
  );
}

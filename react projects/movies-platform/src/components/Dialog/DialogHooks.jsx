import { useState } from 'react';

export function useDialog(title, successButton='Yes', cancelButton='No', ) {

  const [showDialog, setShowDialog] = useState(false);

  // Return a new object with those properties
  return {
    title,
    showDialog,
    setShowDialog,
    successButton,
    cancelButton
  }

}
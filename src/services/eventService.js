const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/events`;



export const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
};

export const show = async (eventId) => {
  try {
    const res = await fetch(`${BASE_URL}/${eventId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const create = async (eventFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  




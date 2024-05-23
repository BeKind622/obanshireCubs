import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserInformation from './UserInformation';
import Calendar from 'react-calendar';

const AvailabilityCalendar = () => {
    const user = UserInformation();
<Calendar/>

}

export default AvailabilityCalendar;

import React, { useState } from 'react';

import Input from '../../components/Input';
import Container from '../../components/Container';
import Select from '../../components/Select';
import { Form, ContainerCode, ContainerDate } from './styles';

const OPTIONS_PAYMENT = [{
    label: 'Credit card',
    vaule: 'creditcard'
},
{
    label: 'Visa',
    vaule: 'visa'
},
{
    label: 'Master Card',
    vaule: 'mastercard' 
    
}];

const OPTONS_MONTH = [{
    label: 'January',
    vaule: '01'
},
{
    label: 'February',
    vaule: '02'
},
{
    label: 'March',
    vaule: '03'
},
{
    label: 'April',
    vaule: '04'
},
{
    label: 'May',
    vaule: '05'
},
{
    label: 'June',
    vaule: '06'
},
{
    label: 'July',
    vaule: '07'
},
{
    label: 'August',
    vaule: '08'
},
{
    label: 'September',
    vaule: '09'
},
{
    label: 'October',
    vaule: '10'
},
{
    label: 'November',
    vaule: '11'
},
{
    label: 'December',
    vaule: '12'
}
];

const OPTIONS_YEAR = [{
    label: '2022',
    vaule: '2022'
},
{
    label: '2023',
    vaule: '2023'
},
{
    label: '2024',
    vaule: '2024'
},
{
    label: '2025',
    vaule: '2025'
},
{
    label: '2026',
    vaule: '2026'
},
{
    label: '2027',
    vaule: '2027'
},
{
    label: '2028',
    vaule: '2028'
},
{
    label: '2029',
    vaule: '2029'
},
{
    label: '2030',
    vaule: '2030'
}]

function Payment() {
    const [card, setCard] = useState('');
    const [number, setNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [securitycode, setSecuritycode] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [erros, setErrors] = useState({});
    return (
        <Container>
            <Form>
                <Select
                    label="Choose your payment method"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                    description="Choose your payment method"
                    options={OPTIONS_PAYMENT} />
                <Input
                    label='Card number'
                    type={'text'}
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    errorMessage={erros.email} />
                <ContainerDate>
                    <Select
                        label='Month'
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        description="Month"
                        options={OPTONS_MONTH} />
                    <Select
                        label='Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        description="Year"
                        options={OPTIONS_YEAR} />                        
  
                </ContainerDate>
                <ContainerCode>
                    <Input
                        label='Security code'                        
                        type={'text'}                        
                        value={securitycode}
                        onChange={(e) => setSecuritycode(e.target.value)}
                        errorMessage={erros.email} />
                    <Input
                        label='Zip code'
                        type={'text'}
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        errorMessage={erros.email} />
                </ContainerCode>
            </Form>
        </Container>
    );
}

export default Payment;
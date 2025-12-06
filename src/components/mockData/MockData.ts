import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Brad Rinehart',
      profileImgUrl: '',
      email: 'j*@gmail.com',
      dateCreated: '5/11/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $500. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 7, 2025',
        description: 'Transfer from Emily Wagner - XXXXXX3467',
        status: 'Success',
        amount_usd: 180000.0
      },
      {
        dateTime: 'May 5, 2025',
        description: 'Transfer from Sofia Müller - XXXXXX9124',
        status: 'Success',
        amount_usd: 185000.0
      },
      {
        dateTime: 'May 1, 2025',
        description: 'Transfer from Ethan Johnson - XXXXXX3491',
        status: 'Success',
        amount_usd: 422000.0
      },
      {
        dateTime: 'April 28, 2025',
        description: 'Transfer fee - XXXXXX4893',
        status: 'Success',
        amount_usd: -75.5
      },
      {
        dateTime: 'April 20, 2025',
        description: 'Transfer to Lucas Dubois - XXXXXX7119',
        status: 'Success',
        amount_usd: -98000.0
      },
      {
        dateTime: 'April 14, 2025',
        description: 'VAT Fee - XXXXXX3478',
        status: 'Success',
        amount_usd: -80.0
      },
      {
        dateTime: 'April 1, 2025',
        description: 'Transfer from Olivia Smith - XXXXXX6390',
        status: 'Success',
        amount_usd: 194500.0
      },
      {
        dateTime: 'March 15, 2025',
        description: 'Transfer to Matteo Rossi - XXXXXX5321',
        status: 'Success',
        amount_usd: -472350.0
      },
      {
        dateTime: 'February 20, 2025',
        description: 'Transfer from Emma Brown - XXXXXX2019',
        status: 'Success',
        amount_usd: 102800.0
      },
      {
        dateTime: 'February 1, 2025',
        description: 'Transfer to Noah Taylor - XXXXXX8647',
        status: 'Success',
        amount_usd: -38000.0
      },
      {
        dateTime: 'January 17, 2025',
        description: 'VAT Fee - XXXXXX3563',
        status: 'Success',
        amount_usd: -100.2
      },
      {
        dateTime: 'December 30, 2024',
        description: 'Transfer from Isabella Dubois - XXXXXX3155',
        status: 'Success',
        amount_usd: 310000.0
      },
      {
        dateTime: 'December 10, 2024',
        description: 'Transfer to Jack Thompson - XXXXXX7298',
        status: 'Success',
        amount_usd: -120500.0
      },
      {
        dateTime: 'November 2, 2024',
        description: 'Transfer from Amelia Müller - XXXXXX4730',
        status: 'Success',
        amount_usd: 21000.0
      },
      {
        dateTime: 'October 15, 2024',
        description: 'Transfer to Liam Martin - XXXXXX1110',
        status: 'Success',
        amount_usd: -9000.0
      },
      {
        dateTime: 'September 10, 2024',
        description: 'Transfer from Benjamin Clark - XXXXXX7623',
        status: 'Success',
        amount_usd: 492300.0
      },
      {
        dateTime: 'August 4, 2024',
        description: 'Transfer to Ava Schmidt - XXXXXX9072',
        status: 'Success',
        amount_usd: -15700.0
      },
      {
        dateTime: 'July 7, 2024',
        description: 'Transfer from Grace Evans - XXXXXX6366',
        status: 'Success',
        amount_usd: 110000.0
      },
      {
        dateTime: 'May 12, 2024',
        description: 'Transfer to Julian Weber - XXXXXX3449',
        status: 'Success',
        amount_usd: -240500.0
      },
      {
        dateTime: 'March 3, 2024',
        description: 'Transfer from Charlotte White - XXXXXX9800',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'December 18, 2023',
        description: 'Transfer to Elias Fischer - XXXXXX4520',
        status: 'Success',
        amount_usd: -49000.0
      },
      {
        dateTime: 'October 22, 2023',
        description: 'Transfer from Henry Baker - XXXXXX6667',
        status: 'Success',
        amount_usd: 402500.0
      },
      {
        dateTime: 'August 9, 2023',
        description: 'Transfer to Emily Wagner - XXXXXX3814',
        status: 'Success',
        amount_usd: -325000.0
      },
      {
        dateTime: 'March 11, 2022',
        description: 'Transfer from Mia Brooks - XXXXXX5230',
        status: 'Success',
        amount_usd: 460000.0
      },
      {
        dateTime: 'June 20, 2021',
        description: 'Transfer to Nathan Gray - XXXXXX1746',
        status: 'Success',
        amount_usd: -140000.0
      },
      {
        dateTime: 'November 30, 2019',
        description: 'Transfer from Ella Foster - XXXXXX6017',
        status: 'Success',
        amount_usd: 250.0
      },
      {
        dateTime: 'September 5, 2019',
        description: 'Transfer to Daniel Keller - XXXXXX8529',
        status: 'Success',
        amount_usd: -175000.0
      },
      {
        dateTime: 'June 1, 2019',
        description: 'Transfer from Ava Lewis - XXXXXX4112',
        status: 'Success',
        amount_usd: 388900.0
      },
      {
        dateTime: 'March 20, 2019',
        description: 'Transfer to Maxime Lefevre - XXXXXX0734',
        status: 'Success',
        amount_usd: -29500.0
      },
      {
        dateTime: 'December 12, 2018',
        description: 'Transfer from Oliver Hall - XXXXXX9001',
        status: 'Success',
        amount_usd: 485500.0
      },
      {
        dateTime: 'October 6, 2018',
        description: 'Transfer fee - XXXXXX2635',
        status: 'Success',
        amount_usd: -50.5
      },
      {
        dateTime: 'September 15, 2018',
        description: 'Transfer to Amelia Rossi - XXXXXX5288',
        status: 'Success',
        amount_usd: -67800.0
      },
      {
        dateTime: 'July 30, 2018',
        description: 'Transfer from Lucas White - XXXXXX7642',
        status: 'Success',
        amount_usd: 15200.0
      },
      {
        dateTime: 'June 12, 2018',
        description: 'VAT Fee - XXXXXX0733',
        status: 'Success',
        amount_usd: -100.75
      },
      {
        dateTime: 'May 3, 2018',
        description: 'Transfer to Sophia Schneider - XXXXXX9835',
        status: 'Success',
        amount_usd: -458000.0
      },
      {
        dateTime: 'February 10, 2018',
        description: 'Transfer from James Anderson - XXXXXX3377',
        status: 'Success',
        amount_usd: 238000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'DENNIS J OSWALD',
      profileImgUrl: '',
      email: 'anabelledevon@gamil.com',
      dateCreated: '5/19/2025', // m/d/y
      username: 'Dennis4567',
      password: 'GodisGood1313'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 15647082.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $500. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'March 3, 2024',
        description: 'Chase EBay - XXXXXX8273',
        status: 'Success',
        amount_usd: 6900
      },
      {
        dateTime: 'December 19, 2023',
        description: 'Target - XXXXXX1935',
        status: 'Success',
        amount_usd: 49
      },
      {
        dateTime: 'February 12, 2023',
        description: 'Payroll Deposit - XXXXXX7402',
        status: 'Success',
        amount_usd: -1300
      },
      {
        dateTime: 'August 15, 2021',
        description: 'ATM Withdrawal - INTERAC - XXXXXX5128',
        status: 'Success',
        amount_usd: -17000
      },
      {
        dateTime: 'June 17, 2020',
        description: 'Web Bill Payment - MASTERCARD - XXXXXX4986',
        status: 'Success',
        amount_usd: -350
      },
      {
        dateTime: 'January 4, 2020',
        description: 'Walmart card YHF - XXXXXX3687',
        status: 'Success',
        amount_usd: -7000
      },
      {
        dateTime: 'May 7, 2015',
        description: 'Store Purchase MTA/NYC TRANSIT - XXXXXX1860',
        status: 'Success',
        amount_usd: -5.0
      },
      {
        dateTime: 'May 6, 2015',
        description: 'Store Purchase DUNKIN DONUTS - XXXXXX9823',
        status: 'Success',
        amount_usd: -4.88
      },
      {
        dateTime: 'May 5, 2015',
        description: 'Store Purchase DORIAN GRAY - XXXXXX4491',
        status: 'Success',
        amount_usd: -22.84
      },
      {
        dateTime: 'January 22, 2011',
        description: 'INTEREST CREDIT - XXXXXX3119',
        status: 'Success',
        amount_usd: 3.02
      },
      {
        dateTime: 'August 8, 2010',
        description: 'ZELLE ACCT CREDIT - XXXXXX6654',
        status: 'Success',
        amount_usd: 1200
      },
      {
        dateTime: 'January 10, 2009',
        description: 'ACH DEBIT CHASE CREDIT CRD - XXXXXX2278',
        status: 'Success',
        amount_usd: -15000
      },
      {
        dateTime: 'January 5, 2009',
        description: 'Truck charges FL DR - XXXXXX5930',
        status: 'Success',
        amount_usd: -1300
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Brittany Fabre',
      profileImgUrl: '',
      email: 'bfabre200@gmail.com',
      dateCreated: '5/28/2025', // m/d/y
      username: 'brittfabre',
      password: 'Bfabrecr7'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 500000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Transfer declined, follow procedure.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 28, 2025',
        description: 'Credit from Chase rice management - XXXXXX4733',
        status: 'Success',
        amount_usd: 500000
      },
      {
        dateTime: 'May 28, 2025',
        description: 'VAT Fee - XXXXXX8273',
        status: 'Success',
        amount_usd: -5
      },
      {
        dateTime: 'May 28, 2025',
        description: 'VAT Fee - XXXXXX1935',
        status: 'Success',
        amount_usd: -5
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Account Open - XXXXXX7402',
        status: 'Success',
        amount_usd: 10
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Anthony Spadaro',
      profileImgUrl: '',
      email: 'a*@gmail.com',
      dateCreated: '6/28/2025', // m/d/y
      dateUpdated: '8/10/2025', // m/d/y
      username: 'AnthonyCarolC123',
      password: 'Spadaro10'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 50801470.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "Transfer declined, to proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $500. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact defense department. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'June 28, 2025',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 45350800
      },
      {
        dateTime: 'May 2, 2025',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 5000
      },
      {
        dateTime: 'March 16, 2025',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 6450
      },
      {
        dateTime: 'January 7, 2025',
        description: 'Walmart - XXXXXX4733',
        status: 'Success',
        amount_usd: -3500
      },
      {
        dateTime: 'April 8, 2024',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 750
      },
      {
        dateTime: 'April 5, 2024',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 900
      },
      {
        dateTime: 'October 23, 2023',
        description: 'CVS Pharmacy - XXXXXX4733',
        status: 'Success',
        amount_usd: -1250
      },
      {
        dateTime: 'September 10, 2023',
        description: 'CVS Pharmacy - XXXXXX4733',
        status: 'Success',
        amount_usd: -3500
      },
      {
        dateTime: 'May 28, 2025',
        description: 'Wire Transfer - XXXXXX4733',
        status: 'Success',
        amount_usd: 500000
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      fullName: 'Jeffrey J Smith',
      email: 'j*@gamil.com',
      dateCreated: '12/6/2025', // m/d/y
      username: 'Jeff$7',
      password: 'Smith$7'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 15894000.76
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23783',
      headerText: 'Dear Valued Customer,',
      lastStepText:
        "To proceed with the transfer, please ensure all tax debts are paid in full, with a minimum payment of $700. This requirement aligns with regulatory guidelines. For any questions or concerns, please don't hesitate to contact us. Thank you.",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 28, 2023',
        description: 'Payroll Deposit - XXXXXX4821',
        status: 'Success',
        amount_usd: 2650000
      },
      {
        dateTime: 'December 19, 2023',
        description: 'Target - XXXXXX3159',
        status: 'Success',
        amount_usd: -49
      },
      {
        dateTime: 'November 30, 2023',
        description: 'Refund - XXXXXX5599',
        status: 'Success',
        amount_usd: 3194000.76
      },
      {
        dateTime: 'October 15, 2023',
        description: 'Zelle Transfer Incoming - XXXXXX7094',
        status: 'Success',
        amount_usd: 3250000
      },
      {
        dateTime: 'September 12, 2023',
        description: 'Amazon Marketplace - XXXXXX1934',
        status: 'Success',
        amount_usd: -89.99
      },
      {
        dateTime: 'September 10, 2023',
        description: 'Tax Refund Deposit - XXXXXX9082',
        status: 'Success',
        amount_usd: 251800
      },
      {
        dateTime: 'September 1, 2023',
        description: 'Payroll Deposit - XXXXXX1402',
        status: 'Success',
        amount_usd: 319000
      },
      {
        dateTime: 'July 2, 2023',
        description: 'Bank Transfer Incoming - XXXXXX6407',
        status: 'Success',
        amount_usd: 3800000
      },
      {
        dateTime: 'March 3, 2023',
        description: 'Chase EBay - XXXXXX5276',
        status: 'Success',
        amount_usd: -6900
      },
      {
        dateTime: 'February 12, 2023',
        description: 'Payroll Deposit - XXXXXX7721',
        status: 'Success',
        amount_usd: 350700
      },
      {
        dateTime: 'January 15, 2023',
        description: 'Bank Transfer Incoming - XXXXXX9917',
        status: 'Success',
        amount_usd: 754430
      },
      {
        dateTime: 'January 7, 2023',
        description: 'Interest Credit - XXXXXX6134',
        status: 'Success',
        amount_usd: 1366.12
      },
      {
        dateTime: 'December 31, 2022',
        description: 'Interest Credit - XXXXXX3110',
        status: 'Success',
        amount_usd: 5.32
      },
      {
        dateTime: 'December 20, 2022',
        description: 'Bonus Deposit - XXXXXX8470',
        status: 'Success',
        amount_usd: 1500
      },
      {
        dateTime: 'December 12, 2022',
        description: 'Direct Deposit - XXXXXX5448',
        status: 'Success',
        amount_usd: 1900
      },
      {
        dateTime: 'December 11, 2022',
        description: 'Employer Bonus Deposit - XXXXXX1920',
        status: 'Success',
        amount_usd: 5000
      },
      {
        dateTime: 'November 2, 2022',
        description: 'Direct Deposit - XXXXXX6655',
        status: 'Success',
        amount_usd: 2800
      },
      {
        dateTime: 'October 20, 2022',
        description: 'Interest Credit - XXXXXX1103',
        status: 'Success',
        amount_usd: 2.12
      },
      {
        dateTime: 'October 3, 2022',
        description: 'Refund - XXXXXX2301',
        status: 'Success',
        amount_usd: 200
      },
      {
        dateTime: 'September 21, 2022',
        description: 'Deposit - XXXXXX9205',
        status: 'Success',
        amount_usd: 900
      },
      {
        dateTime: 'September 18, 2022',
        description: 'Airline Ticket Delta - XXXXXX7473',
        status: 'Success',
        amount_usd: -480
      },
      {
        dateTime: 'September 2, 2022',
        description: 'Interest Credit - XXXXXX2780',
        status: 'Success',
        amount_usd: 3.01
      },
      {
        dateTime: 'August 15, 2022',
        description: 'ATM Withdrawal - INTERAC - XXXXXX6503',
        status: 'Success',
        amount_usd: -17000
      },
      {
        dateTime: 'August 8, 2022',
        description: 'ZELLE ACCT CREDIT - XXXXXX6601',
        status: 'Success',
        amount_usd: 1200
      },
      {
        dateTime: 'June 17, 2022',
        description: 'Web Bill Payment - MASTERCARD - XXXXXX4487',
        status: 'Success',
        amount_usd: -350
      },
      {
        dateTime: 'June 15, 2022',
        description: 'Bank Transfer Incoming - XXXXXX7292',
        status: 'Success',
        amount_usd: 450
      },
      {
        dateTime: 'May 18, 2022',
        description: 'Payroll Deposit - XXXXXX9134',
        status: 'Success',
        amount_usd: 2900
      },
      {
        dateTime: 'May 10, 2022',
        description: 'Store Purchase COSTCO - XXXXXX9044',
        status: 'Success',
        amount_usd: -210
      },
      {
        dateTime: 'April 21, 2022',
        description: 'Store Purchase SHELL GAS - XXXXXX1824',
        status: 'Success',
        amount_usd: -40.22
      },
      {
        dateTime: 'April 10, 2022',
        description: 'Store Purchase WALMART - XXXXXX5102',
        status: 'Success',
        amount_usd: -89.23
      },
      {
        dateTime: 'February 18, 2021',
        description: 'Transfer Incoming - XXXXXX9051',
        status: 'Success',
        amount_usd: 890
      },
      {
        dateTime: 'February 2, 2022',
        description: 'Interest Credit - XXXXXX3782',
        status: 'Success',
        amount_usd: 4.12
      },
      {
        dateTime: 'February 1, 2022',
        description: 'Utility Bill Payment - XXXXXX7744',
        status: 'Success',
        amount_usd: -210
      },
      {
        dateTime: 'January 4, 2022',
        description: 'Walmart card YHF - XXXXXX3128',
        status: 'Success',
        amount_usd: 7000
      },
      {
        dateTime: 'December 19, 2021',
        description: 'Deposit - XXXXXX6122',
        status: 'Success',
        amount_usd: 500
      },
      {
        dateTime: 'December 11, 2021',
        description: 'Employer Bonus Deposit - XXXXXX5119',
        status: 'Success',
        amount_usd: 5000
      },
      {
        dateTime: 'December 2, 2021',
        description: 'Deposit - XXXXXX9921',
        status: 'Success',
        amount_usd: 300
      },
      {
        dateTime: 'October 15, 2021',
        description: 'Interest Credit - XXXXXX9117',
        status: 'Success',
        amount_usd: 2.9
      },
      {
        dateTime: 'September 2, 2021',
        description: 'Interest Credit - XXXXXX2780',
        status: 'Success',
        amount_usd: 3.01
      },
      {
        dateTime: 'May 7, 2021',
        description: 'Store Purchase MTA/NYC TRANSIT - XXXXXX4132',
        status: 'Success',
        amount_usd: -5.0
      },
      {
        dateTime: 'May 6, 2021',
        description: 'Store Purchase DUNKIN DONUTS - XXXXXX2518',
        status: 'Success',
        amount_usd: -4.88
      },
      {
        dateTime: 'May 5, 2021',
        description: 'Store Purchase DORIAN GRAY - XXXXXX9047',
        status: 'Success',
        amount_usd: -22.84
      },
      {
        dateTime: 'April 21, 2021',
        description: 'Store Purchase SHELL GAS - XXXXXX1824',
        status: 'Success',
        amount_usd: -40.22
      },
      {
        dateTime: 'February 10, 2021',
        description: 'Payroll Deposit - XXXXXX7395',
        status: 'Success',
        amount_usd: 2400
      },
      {
        dateTime: 'January 5, 2021',
        description: 'Interest Credit - XXXXXX5001',
        status: 'Success',
        amount_usd: 3.05
      },
      {
        dateTime: 'March 28, 2020',
        description: 'ATM Withdrawal - XXXXXX3744',
        status: 'Success',
        amount_usd: -300
      },
      {
        dateTime: 'March 12, 2020',
        description: 'Deposit - XXXXXX7190',
        status: 'Success',
        amount_usd: 400
      },
      {
        dateTime: 'January 22, 2020',
        description: 'INTEREST CREDIT - XXXXXX3334',
        status: 'Success',
        amount_usd: 3.02
      },
      {
        dateTime: 'January 20, 2020',
        description: 'Interest Credit - XXXXXX2994',
        status: 'Success',
        amount_usd: 2.19
      },
      {
        dateTime: 'January 10, 2020',
        description: 'ACH DEBIT CHASE CREDIT CRD - XXXXXX2006',
        status: 'Success',
        amount_usd: -15000
      },
      {
        dateTime: 'January 5, 2020',
        description: 'Truck charges FL DR - XXXXXX5502',
        status: 'Success',
        amount_usd: -1300
      },
      {
        dateTime: 'January 2, 2020',
        description: 'Transfer Incoming - XXXXXX1180',
        status: 'Success',
        amount_usd: 110
      },
      {
        dateTime: 'January 1, 2020',
        description: 'Payroll Deposit - XXXXXX3901',
        status: 'Success',
        amount_usd: 2400
      },
      {
        dateTime: 'December 20, 2019',
        description: 'Bonus - XXXXXX7711',
        status: 'Success',
        amount_usd: 900
      },
      {
        dateTime: 'December 5, 2019',
        description: 'Bonus Deposit - XXXXXX1594',
        status: 'Success',
        amount_usd: 1300
      },
      {
        dateTime: 'December 2, 2019',
        description: 'Deposit - XXXXXX9921',
        status: 'Success',
        amount_usd: 300
      },
      {
        dateTime: 'December 1, 2019',
        description: 'Deposit - XXXXXX8830',
        status: 'Success',
        amount_usd: 150
      },
      {
        dateTime: 'September 22, 2019',
        description: 'Interest Credit - XXXXXX6224',
        status: 'Success',
        amount_usd: 2.78
      },
      {
        dateTime: 'September 18, 2019',
        description: 'Airline Ticket Delta - XXXXXX7473',
        status: 'Success',
        amount_usd: -480
      },
      {
        dateTime: 'September 16, 2019',
        description: 'Interest Credit - XXXXXX2291',
        status: 'Success',
        amount_usd: 1.99
      },
      {
        dateTime: 'September 8, 2019',
        description: 'Payroll Deposit - XXXXXX8861',
        status: 'Success',
        amount_usd: 2500
      },
      {
        dateTime: 'August 1, 2019',
        description: 'Interest Credit - XXXXXX4688',
        status: 'Success',
        amount_usd: 2.1
      },
      {
        dateTime: 'August 1, 2019',
        description: 'Payroll Deposit - XXXXXX9483',
        status: 'Success',
        amount_usd: 2100
      },
      {
        dateTime: 'April 10, 2019',
        description: 'Store Purchase KMART - XXXXXX2047',
        status: 'Success',
        amount_usd: -60.45
      },
      {
        dateTime: 'March 10, 2019',
        description: 'Utility Payment - XXXXXX2519',
        status: 'Success',
        amount_usd: -76.88
      },
      {
        dateTime: 'February 16, 2019',
        description: 'ACH DIRECT DEPOSIT - XXXXXX5104',
        status: 'Success',
        amount_usd: 1600
      },
      {
        dateTime: 'January 12, 2019',
        description: 'Store Purchase SEARS - XXXXXX7749',
        status: 'Success',
        amount_usd: -89
      },
      {
        dateTime: 'January 10, 2019',
        description: 'ACH DEBIT CHASE CREDIT CRD - XXXXXX2006',
        status: 'Success',
        amount_usd: -15000
      },
      {
        dateTime: 'January 5, 2019',
        description: 'Truck charges FL DR - XXXXXX5502',
        status: 'Success',
        amount_usd: -1300
      },
      {
        dateTime: 'January 1, 2019',
        description: 'Payroll Deposit - XXXXXX3901',
        status: 'Success',
        amount_usd: 2400
      }
    ]
  }
];

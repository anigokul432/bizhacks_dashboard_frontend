# AI Financial Coach - Credit Scoring MicroFrontend

**Introduction:**
This project aims to create a transparent AI-driven credit scoring system to address the common pain points associated with traditional credit evaluations. By offering clear and interpretable credit scores, both borrowers and lenders can better understand the factors influencing credit decisions, ensuring fairness, consistency, and efficiency.

**Pain Points Addressed:**
- Lack of transparency in credit decisions.
- Bias and fairness issues.
- Inconsistent evaluations from banks.
- Time-consuming processes.
- Challenges in credit risk management.
- Limited access to credit.

**Solution Overview:**
We developed a comprehensive solution consisting of multiple components:
1. **Credit Scoring Dashboard:** Real-time credit score monitoring.
2. **Credit Simulation Tool:** Allows users to simulate the impact of financial decisions on their credit scores.
3. **AI Personalized Credit Improvement Plan:** Provides tailored advice for improving credit scores.
4. **AI Banking Assistant:** Helps users understand their credit scores and offers financial advice.

**Benefits for the Bank:**
- Enhanced decision-making.
- Improved operational efficiency.
- Better regulatory compliance.
- Increased customer trust and satisfaction.
- Advanced risk management capabilities.

**Benefits for the Client:**
- Better understanding of credit decisions.
- Fair and unbiased treatment.
- Faster credit approvals.
- Improved access to credit.
- Educational insights into financial health.

**Demo Walkthrough:**
1. **Bank Admin Persona:**
   - View detailed analytics of all banking customers.
   - Generate and visualize the distribution of credit scores.
2. **Customer Persona:**
   - Dashboard displaying credit score, personalized loan offers, and score analysis.
   - Graphs showing credit score trends and expenditure comparisons.
   - AI-powered personalized credit improvement plan.
   - AI financial coach providing advice and recommendations.

**Key Target Variables:**
- **CREDIT_SCORE:** Customer's numerical credit score.
- **DEFAULT:** Binary indicator of customer default.

**Features:**
- **INCOME, SAVINGS, DEBT:** Financial metrics over the last 12 months.
- **Ratios:** Debt to income, savings to income, debt to savings.
- **Transaction Categories:** Expenditure in various categories over 6 and 12 months.
- **Categorical Features:** Presence of debt, credit card, mortgage, savings account, and dependents.

### Presentation Structure:
1. **Introduction and Problem Statement:** Overview of non-transparent credit scoring and project objectives.
2. **Pain Points Addressed:** Key issues with traditional credit evaluations.
3. **Solution Overview:** Components and functionalities of the AI-driven system.
4. **Benefits for the Bank:** Enhanced decision-making and risk management.
5. **Benefits for the Client:** Improved understanding and access to credit.
6. **Application and AI Assistant Demo:** Walkthrough of the application and key features.

### Usage Instructions:
1. **Installation:**
   - Clone the repository: `git clone https://github.com/anigokul432/bizhacks_dashboard_frontend.git`
   - Navigate to the project directory: `cd bizhacks_dashboard_frontend`
   - Install dependencies: `npm install`

2. **Running the Application:**
   - Start the development server: `npm start`
   - Access the application at `http://localhost:3000`

3. **Login:**
   - Admin login to view customer analytics.
   - User login to view personal credit score details and improvement plans.

4. **Components:**
   - **Gauge:** Real-time credit score monitoring using `react-gauge-component`.
   - **Line Charts:** Visualize credit score trends with `react-google-charts`.
   - **AI Assistant:** Interactive assistant for financial advice and credit improvement recommendations.

### Example Usage:
1. **Admin Persona:**
   - Generate a graph of credit score distribution by entering a natural language query.
2. **Customer Persona:**
   - View credit score and personalized loan offers.
   - Analyze score factors and spending habits.
   - Use the credit simulation tool to understand the impact of financial decisions.

**Repository:**
- [GitHub Repository](https://github.com/anigokul432/bizhacks_dashboard_frontend.git)

**Dataset:**
- [Kaggle Dataset](https://www.kaggle.com/code/saloni1712/credit-score-classification)
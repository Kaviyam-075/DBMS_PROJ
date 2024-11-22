import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";

import { dollar } from '../../utils/icons';
import { useGlobalContext } from "../../context/globalContext";
import  Tracker_Chart  from "../charts/Tracker_Chart";
import History from "../../History/History";






function Dashboard() {
    const {TotalExpense, TotalIncome, TotalBalance, incomes, expenses} = useGlobalContext()
    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className = "stats-con">
                    <div className="chart-con">
                        <Tracker_Chart />
                        <div className="amount-con">
                            <div className = "income">
                                <h2>Total Income</h2>
                                <p>{dollar} {TotalIncome()}</p>
                            </div>
                            <div className = "expense">
                                <h2>Total Expense</h2>
                                <p>{dollar} {TotalExpense()}</p>
                            </div>
                            <div className = "balance">
                                <h2>Total Balance</h2>
                                <p>{dollar} {TotalBalance()}</p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span> Max </h2>
                        <div className="salary-items">
                            <p>
                                {Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span> Max </h2>
                        <div className="salary-items">
                            <p>
                                {Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                {Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>

                </div>

                
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
.stats-con{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con{
        grid-column: 1 / 4;
        height: 400px;
        .amount-con{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-top: 2rem;
            .income, .expense{
                grid-column: span 2;
            }
            .income, .expense, .balance{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                border-radius: 20px;
                padding: 1rem;
                p{
                    font-size: 2.0rem;
                    font-weight: 500;
                }
            }
            .balance{
                grid-column: 2 / 4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    color: var(--color-green);
                    opacity: 0.6;
                    font-size: 2.0rem;
                }
            }
        }
    }

    .history-con{
        grid-column: 4 / -1;
        h2{
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .salary-title{
            font-size: 1.0rem;
            span{
                font-size: 1.2rem;
            }
        }
        .salary-item{
            background: #FCF6F9;
            border: 2px solid #FFFFFF;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            padding: 1rem;
            border-radius: 20px;
            display: auto;
            justify-content: space-between;
            align-items: center;
            p{
                font-weight: 300;
                font-size: 0.8rem;
            }
        }
    }
}
`;

export default Dashboard;
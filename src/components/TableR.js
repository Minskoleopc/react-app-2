import React from 'react'
import ColumnsR from './ColumnsR'
function TableR(){
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        city
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <ColumnsR/>
                </tr>
            </tbody>

        </table>
    )
}
export default TableR
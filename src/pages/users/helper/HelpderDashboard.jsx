import React from "react";

const HelperDashboard = () => {
    const user = UserInformation();
    return (
    <>
    
    <table class="w-full table-auto text-sm">
    <thead>
        <tr class="text-sm leading-normal">
            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Name</th>
            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Date</th>
            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr class="hover:bg-grey-lighter">
            <td class="py-2 px-4 border-b border-grey-light">Carlos Sanchez</td>
            <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
            <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
        </tr>
        <tr class="hover:bg-grey-lighter">
            <td class="py-2 px-4 border-b border-grey-light">Ana Torres</td>
            <td class="py-2 px-4 border-b border-grey-light">28/07/2023</td>
            <td class="py-2 px-4 border-b border-grey-light text-right">$2000</td>
        </tr>
    </tbody>
</table>

    
    
    </>
    )
}

export default HelperDashboard;
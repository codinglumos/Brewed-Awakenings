import { getEmployees, getOrders } from "./database.js"
import "./Orders.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}>${employee.name}</li>`
    }

    html += `</ul>`

    return html
}

const employeeOrders = (employee, orders) => {
    const fulfilledOrders = []
console.log(orders)
    for (const order of orders) {
        if (employee.id === order.employeeId) {
            fulfilledOrders.push(order)
        }
    }
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (parseInt(employee.id) === parseInt(employeeId)) {
                    const employeesOrders = employeeOrders(employee, orders)
                    window.alert(`${employee.name} sold ${employeesOrders.length} products`)
                }
            }
        }
    }
)
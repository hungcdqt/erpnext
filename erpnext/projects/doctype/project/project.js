// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// show tasks
cur_frm.cscript.refresh = function(doc) {
	if(!doc.__islocal) {
		cur_frm.appframe.add_button(frappe._("Gantt Chart"), function() {
			frappe.route_options = {"project": doc.name}
			frappe.set_route("Gantt", "Task");
		}, "icon-tasks");
		cur_frm.add_custom_button(frappe._("Tasks"), function() {
			frappe.route_options = {"project": doc.name}
			frappe.set_route("List", "Task");
		}, "icon-list");
	}
}

cur_frm.fields_dict.customer.get_query = function(doc,cdt,cdn) {
	return{
		query: "erpnext.controllers.queries.customer_query"
	}
}
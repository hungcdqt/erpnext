# Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

class DocType:
	def __init__(self, d, dl):
		self.doc, self.doclist = d, dl
		
	def validate(self):
		for key in ["cust_master_name", "customer_group", "territory", "maintain_same_sales_rate",
			"editable_price_list_rate", "selling_price_list"]:
				frappe.db.set_default(key, self.doc.fields.get(key, ""))

		from erpnext.setup.doctype.naming_series.naming_series import set_by_naming_series
		set_by_naming_series("Customer", "customer_name", 
			self.doc.get("cust_master_name")=="Naming Series", hide_name_field=False)

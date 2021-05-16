import React from 'react';


const Appointment = () => {
    return (
	<div class = "card-body" >
        <div class = "table-responsive" > 
        <table class = "table table-hover" > 
			<thead > 
				<tr >
					<th scope = "col" > Photo </th>
					<th scope="col">Name</th > 
					<th scope = "col" > Email </th>
					<th scope="col">Date</th > 
					<th scope = "col" > Visit time </th>
					<th scope="col">Number</th >
					<th scope = "col" > Doctor </th>
					<th scope="col">Injury / Condition </th>
					<th scope="col">Actions</th > 
				</tr>
			</thead > 
			<tbody>
				<tr >
					<td> <img src = "../assets/content/user-40-1.jpg" alt = "" width="40" height="40" class = "rounded-500" ></img>
                    </td>
					<td><strong>Liam</strong > </td>
					<td>
						<div class="d-flex align-items-center nowrap text-primary">
							<span class="icofont-ui-email p-0 mr-2"></span > liam @gmail.com 
						</div>
					</td>
					<td> 
						<div class = "text-muted text-nowrap" > 10 Feb 2018 </div>
					</td> 
					<td> 
						<div class = "text-muted text-nowrap" > 9: 15-9: 45 </div>
					</td>
					<td>
						<div class = "d-flex align-items-center nowrap text-primary" >
							<span class = "icofont-ui-cell-phone p-0 mr-2" > </span> 0126595743
						</div > 
					</td>
					<td>Dr. Benjamin</td >
					<td> mumps </td>
					<td>
						<div class="actions">
							<button class="btn btn-info btn-sm btn-square rounded-pill">
								<span class="btn-icon icofont-ui-edit"></span > 
							</button> 
							<button class="btn btn-error btn-sm btn-square rounded-pill">
								<span class="btn-icon icofont-ui-delete"></span > 
							</button>
						</div >
					</td>
				</tr>
				<tr>
					<td> <img src = "../assets/content/user-40-2.jpg" alt = "" width="40" height="40" class = "rounded-500" ></img> </td>
					<td><strong>Emma</strong > </td>
					<td>
						<div class="d-flex align-items-center nowrap text-primary">
						<span class="icofont-ui-email p-0 mr-2"></span > emma @gmail.com </div>
					</td >
					<td> 
						<div class = "text-muted text-nowrap" > 5 Dec 2018 </div>
					</td > 
					<td> <div class = "text-muted text-nowrap" > 9: 00-9: 30 </div>
					</td > 
					<td> 
						<div class = "d-flex align-items-center nowrap text-primary" > 
							<span class = "icofont-ui-cell-phone p-0 mr-2" > </span> 0126595743
						</div >
					</td>
					<td>Dr. Liam</td > 
					<td> arthritis </td>
					<td>
						<div class="actions">
							<button class="btn btn-info btn-sm btn-square rounded-pill">
								<span class="btn-icon icofont-ui-edit"></span > 
							</button> 
							<button class="btn btn-error btn-sm btn-square rounded-pill">
								<span class="btn-icon icofont-ui-delete"></span >
							</button>
						</div >
					</td>
				</tr >


			</tbody>
		</table>
		</div>
	</div>
    )
}

export default Appointment;

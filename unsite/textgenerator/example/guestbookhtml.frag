		%N_LINK_PREV:previous page% 
		&nbsp;&nbsp;|&nbsp;&nbsp;
		<b>current page: %NUM_CUR_PAGE%</b>
		&nbsp;&nbsp;|&nbsp;&nbsp; 
		%N_LINK_NEXT:next page%
		</p>

		<p>

		<p> %NUM_ENTRIES% entries on %NUM_PAGES% page(s) </p>
		
		%INPUT%

		<table>
			<tr>
				<td> your name:				</td>
				<td> %I_FROM:30:%			</td>
			</tr>
			<tr>
				<td> your email				</td>
				<td> %I_EMAIL:30:%			</td>
			</tr>
			<tr>
				<td> your homepage:			</td>
				<td> %I_URL:30:http://%			</td>
			</tr>
			<tr>
				<td colspan="2"> <p> %I_CONTENT:52:8%	</td> 
			</tr>
			<tr>
				<td> %I_RESET:clear all fields%		</td>
				<td> %I_SUBMIT:send entry:send entry%	</td>
			</tr>
		</table>

		%/INPUT%
		
		<table>
			<tr>
				<td> <hr noshade size=1>		</td>
			</tr>

			%ENTRIES%

			<tr>
				<td> entry:				</td>
				<td> %E_NUMBER%				</td>
			</tr>
			<tr>
				<td> comment:				</td>
				<td><b> %E_CONTENT%	</b>		</td>
			</tr>
			<tr>
				<td> author:				</td>
				<td> %E_FROM%				</td>
			</tr>
			<tr>
				<td> email:				</td>
				<td> %E_EMAIL%				</td>
			</tr>
			<tr>
				<td> his URL:				</td>
				<td> %E_URL%				</td>
			</tr>
			<tr>
				<td> at:				</td>
				<td> %E_DATE%				</td>
			</tr>
			<tr>
				<td colspan="2"><hr noshade size=1>	</td>
			</tr>

			%/ENTRIES%

		</table>		

		<p> %NUM_ENTRIES% entries on %NUM_PAGES% page(s) </p>

		<p>
		<p>
		%N_LINK_PREV:previous page% 
		&nbsp;&nbsp;|&nbsp;&nbsp;
		<b>current page: %NUM_CUR_PAGE%</b>
		&nbsp;&nbsp;|&nbsp;&nbsp; 
		%N_LINK_NEXT:next page%
		</p>

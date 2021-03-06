/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Extends the [sortable paginated list]{@link module:alfresco/lists/AlfSortablePaginatedList} to
 * handle search specific data.
 *
 * @module alfresco/documentlibrary/AlfSearchList
 * @extends alfresco/search/AlfSearchList
 * @author Dave Draper
 * @deprecated Since 1.0.4 - Use [alfresco/search/AlfSearchList]{@link module:alfresco/search/AlfSearchList} instead.
 */
define(["dojo/_base/declare",
        "alfresco/search/AlfSearchList"],
        function(declare, AlfSearchList) {
   return declare([AlfSearchList], {});
});
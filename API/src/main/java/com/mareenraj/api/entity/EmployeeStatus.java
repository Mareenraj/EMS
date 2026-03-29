package com.mareenraj.api.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum EmployeeStatus {
    ACTIVE("active"),
    ON_LEAVE("on-leave"),
    SUSPENDED("suspended"),
    TERMINATED("terminated"),
    RETIRED("retired");

    private final String value;

    EmployeeStatus(String value) {
        this.value = value;
    }

    @JsonValue
    public String getValue() {
        return value;
    }

    @JsonCreator
    public static EmployeeStatus fromValue(String value) {
        for (EmployeeStatus employeeStatus : values()) {
            if (employeeStatus.value.equalsIgnoreCase(value)) {
                return employeeStatus;
            }
        }
        throw new IllegalArgumentException("Invalid status.");
    }
}

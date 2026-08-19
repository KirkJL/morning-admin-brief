/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * SC-300 — MICROSOFT IDENTITY AND ACCESS ADMINISTRATOR
 * ============================================================
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured as of:
 * 27 April 2026
 *
 * Microsoft weighting:
 *
 * 1. Implement and manage user identities
 *    20–25%
 *
 * 2. Implement authentication and access management
 *    25–30%
 *
 * 3. Plan and implement workload identities
 *    20–25%
 *
 * 4. Plan and automate identity governance
 *    20–25%
 *
 * 365in5 50-question allocation:
 *
 * User identities:            12 = 24%
 * Authentication & access:   14 = 28%
 * Workload identities:       12 = 24%
 * Identity governance:       12 = 24%
 *
 * TOTAL:                     50 = 100%
 *
 * ============================================================
 */


"use strict";


const SC300_EXAM = {

    id:
        "sc-300",

    code:
        "SC-300",

    title:
        "Microsoft Identity and Access Administrator",

    category:
        "Microsoft Security",

    description:
        "Practice Microsoft Entra identity, authentication, " +
        "Conditional Access, workload identities, enterprise " +
        "applications, privileged access and identity governance.",

    blueprintVersion:
        "2026-04-27",

    blueprintLabel:
        "Skills measured as of 27 April 2026",

    questionCount:
        50,

    durationMinutes:
        100,

    simulatedPassingScore:
        700,

    domains: {


        identities: {

            name:
                "Implement and manage user identities",

            minWeight:
                20,

            maxWeight:
                25,

            simulatorQuestions:
                12

        },


        authentication: {

            name:
                "Implement authentication and access management",

            minWeight:
                25,

            maxWeight:
                30,

            simulatorQuestions:
                14

        },


        workloads: {

            name:
                "Plan and implement workload identities",

            minWeight:
                20,

            maxWeight:
                25,

            simulatorQuestions:
                12

        },


        governance: {

            name:
                "Plan and automate identity governance",

            minWeight:
                20,

            maxWeight:
                25,

            simulatorQuestions:
                12

        }

    }

};



const SC300_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     * IMPLEMENT AND MANAGE USER IDENTITIES
     * 12 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC300-ID-001",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Configure and manage Microsoft Entra roles",

        question:
            "A help-desk administrator must reset passwords for " +
            "non-administrative users but must not receive broader " +
            "directory permissions. Which Microsoft Entra role is " +
            "the best fit?",

        options: [

            "Password Administrator",

            "Global Administrator",

            "Global Reader",

            "Application Administrator"

        ],

        answer:
            [0],

        explanation:
            "Password Administrator is designed for password-reset " +
            "operations without granting broad tenant-wide administrative " +
            "permissions."

    },


    {

        id:
            "SC300-ID-002",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Configure administrative units",

        question:
            "Your organisation has separate regional support teams. " +
            "Administrators in Europe must manage only European users " +
            "without being able to manage users in other regions. " +
            "What should you configure?",

        options: [

            "Administrative units",

            "Conditional Access",

            "Access packages",

            "Managed identities"

        ],

        answer:
            [0],

        explanation:
            "Administrative units can scope Microsoft Entra administrative " +
            "permissions to a subset of users, groups, or devices."

    },


    {

        id:
            "SC300-ID-003",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage users",

        question:
            "You need to create 500 Microsoft Entra users from information " +
            "held in a CSV file. Which approach is most appropriate?",

        options: [

            "Use bulk user creation or PowerShell",

            "Create every account manually",

            "Use Azure Bastion",

            "Create an access review"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra supports bulk identity operations through the " +
            "admin centre and automation tools such as PowerShell."

    },


    {

        id:
            "SC300-ID-004",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage groups",

        question:
            "All users whose Department attribute equals Finance should " +
            "automatically become members of Group1. What should you use?",

        options: [

            "Dynamic group membership",

            "A static group",

            "An access package",

            "A Conditional Access policy"

        ],

        answer:
            [0],

        explanation:
            "Dynamic membership rules automatically add and remove users " +
            "based on Microsoft Entra identity attributes."

    },


    {

        id:
            "SC300-ID-005",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage custom security attributes",

        question:
            "You need to attach organisation-specific identity metadata " +
            "such as ClearanceLevel to users and service principals. " +
            "Which Microsoft Entra feature should you use?",

        options: [

            "Custom security attributes",

            "Resource locks",

            "Azure Monitor alerts",

            "Deployment slots"

        ],

        answer:
            [0],

        explanation:
            "Custom security attributes provide tenant-defined attributes " +
            "that can be associated with supported Microsoft Entra objects."

    },


    {

        id:
            "SC300-ID-006",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage external identities",

        question:
            "You need to allow an external consultant to collaborate in " +
            "your tenant while maintaining their home organisation identity. " +
            "Which identity type should you use?",

        options: [

            "Microsoft Entra B2B guest user",

            "A shared local administrator account",

            "A managed identity",

            "A break-glass account"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra B2B collaboration allows external users to " +
            "access tenant resources using external identities."

    },


    {

        id:
            "SC300-ID-007",

        domain:
            "identities",

        type:
            "multi",

        objective:
            "Manage external identities",

        question:
            "Which TWO capabilities help govern collaboration between " +
            "different Microsoft Entra tenants?",

        options: [

            "Cross-tenant access settings",

            "Cross-tenant synchronization",

            "Azure Storage lifecycle rules",

            "Virtual network peering"

        ],

        answer:
            [0, 1],

        explanation:
            "Cross-tenant access settings govern inbound and outbound " +
            "collaboration trust, while cross-tenant synchronization can " +
            "automate identity provisioning between tenants."

    },


    {

        id:
            "SC300-ID-008",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Implement hybrid identity",

        question:
            "Your organisation has on-premises Active Directory Domain " +
            "Services and Microsoft Entra ID. User password hashes must " +
            "be synchronized to Microsoft Entra ID so cloud authentication " +
            "can continue if on-premises authentication services are " +
            "unavailable. Which authentication method supports this?",

        options: [

            "Password hash synchronization",

            "Pass-through authentication only",

            "AD FS only",

            "Application Proxy"

        ],

        answer:
            [0],

        explanation:
            "Password hash synchronization stores a derived password hash " +
            "in Microsoft Entra ID and supports cloud-based authentication."

    },


    {

        id:
            "SC300-ID-009",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Implement hybrid identity",

        question:
            "Cloud authentication requests must validate user credentials " +
            "against on-premises Active Directory without synchronizing " +
            "password hashes to Microsoft Entra ID. What should you use?",

        options: [

            "Pass-through authentication",

            "Password hash synchronization",

            "Windows Hello only",

            "Access reviews"

        ],

        answer:
            [0],

        explanation:
            "Pass-through authentication validates sign-ins against " +
            "on-premises Active Directory through authentication agents."

    },


    {

        id:
            "SC300-ID-010",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage devices in Microsoft Entra ID",

        question:
            "Employees use corporate Windows devices that should be " +
            "directly joined to the cloud identity directory rather than " +
            "on-premises Active Directory. Which state should you use?",

        options: [

            "Microsoft Entra joined",

            "Microsoft Entra registered only",

            "Workgroup joined",

            "Azure Storage joined"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra join is designed for organisation-owned " +
            "devices that authenticate directly against Microsoft Entra ID."

    },


    {

        id:
            "SC300-ID-011",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Manage licenses",

        question:
            "Every user in Group1 should automatically receive the same " +
            "Microsoft 365 license, and the license should be removed " +
            "automatically when the user leaves Group1. What should you use?",

        options: [

            "Group-based licensing",

            "Individual manual assignment",

            "Azure RBAC",

            "A resource lock"

        ],

        answer:
            [0],

        explanation:
            "Group-based licensing automatically assigns and removes " +
            "licenses based on Microsoft Entra group membership."

    },


    {

        id:
            "SC300-ID-012",

        domain:
            "identities",

        type:
            "single",

        objective:
            "Monitor hybrid identity",

        question:
            "You need health information about Microsoft Entra Connect " +
            "Sync infrastructure and identity synchronization. Which " +
            "service should you use?",

        options: [

            "Microsoft Entra Connect Health",

            "Azure Advisor",

            "Azure Front Door",

            "Microsoft Purview Audit"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra Connect Health provides monitoring and " +
            "health information for supported hybrid identity components."

    },



    /*
     * ========================================================
     * DOMAIN 2
     * IMPLEMENT AUTHENTICATION AND ACCESS MANAGEMENT
     * 14 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC300-AUTH-001",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement authentication methods",

        question:
            "A new employee needs to securely sign in for the first time " +
            "and register passwordless authentication without being given " +
            "their permanent password. Which feature should you use?",

        options: [

            "Temporary Access Pass",

            "Shared Access Signature",

            "Access package",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Temporary Access Pass provides a time-limited authentication " +
            "method that can bootstrap passwordless registration."

    },


    {

        id:
            "SC300-AUTH-002",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement passwordless authentication",

        question:
            "Your organisation wants phishing-resistant passwordless " +
            "authentication using hardware security keys. Which method " +
            "should you deploy?",

        options: [

            "FIDO2 security keys",

            "Security questions",

            "SMS only",

            "Password writeback"

        ],

        answer:
            [0],

        explanation:
            "FIDO2 security keys provide phishing-resistant passwordless " +
            "authentication."

    },


    {

        id:
            "SC300-AUTH-003",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Configure self-service password reset",

        question:
            "Users should reset forgotten passwords without contacting the " +
            "help desk. Which Microsoft Entra capability should you enable?",

        options: [

            "Self-service password reset",

            "Privileged Identity Management",

            "Application Proxy",

            "Cross-tenant synchronization"

        ],

        answer:
            [0],

        explanation:
            "Self-service password reset allows eligible users to reset " +
            "or unlock their credentials after completing configured " +
            "authentication verification."

    },


    {

        id:
            "SC300-AUTH-004",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement Conditional Access",

        question:
            "Users accessing SharePoint Online from outside trusted " +
            "locations must complete multifactor authentication. Which " +
            "feature should you configure?",

        options: [

            "Conditional Access",

            "An access review",

            "A custom security attribute",

            "A managed identity"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access evaluates signals such as location, user, " +
            "device and application, then enforces access controls such as MFA."

    },


    {

        id:
            "SC300-AUTH-005",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Test Conditional Access",

        question:
            "Before enabling a new Conditional Access policy, you want to " +
            "evaluate its effect without enforcing the access controls. " +
            "Which policy state should you use?",

        options: [

            "Report-only",

            "Disabled permanently",

            "AuditIfNotExists",

            "ReadOnly"

        ],

        answer:
            [0],

        explanation:
            "Report-only mode evaluates Conditional Access policies " +
            "without enforcing their grant or session controls."

    },


    {

        id:
            "SC300-AUTH-006",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Troubleshoot Conditional Access",

        question:
            "A user unexpectedly receives an MFA challenge. You need to " +
            "determine which Conditional Access policy affected the sign-in. " +
            "Which log should you investigate?",

        options: [

            "Microsoft Entra sign-in logs",

            "Azure Activity Log only",

            "Azure Storage logs",

            "Windows Update history"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra sign-in logs include Conditional Access " +
            "evaluation information for individual authentication events."

    },


    {

        id:
            "SC300-AUTH-007",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Manage user risk",

        question:
            "Microsoft Entra ID Protection identifies that User1 has high " +
            "user risk. You want the user to securely remediate that risk " +
            "without manual administrator intervention where possible. " +
            "Which control is commonly used?",

        options: [

            "Require secure password change",

            "Delete the user immediately",

            "Assign Global Administrator",

            "Disable audit logging"

        ],

        answer:
            [0],

        explanation:
            "Risk-based policies can require a secure password change " +
            "to allow eligible users to remediate detected user risk."

    },


    {

        id:
            "SC300-AUTH-008",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Manage sign-in risk",

        question:
            "You want users performing medium-risk sign-ins to be " +
            "challenged for additional verification. Which technology " +
            "should you combine with sign-in risk?",

        options: [

            "Conditional Access requiring MFA",

            "Azure resource locks",

            "Management groups",

            "Blob lifecycle management"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access can use Microsoft Entra sign-in risk " +
            "as a condition and require MFA or another grant control."

    },


    {

        id:
            "SC300-AUTH-009",

        domain:
            "authentication",

        type:
            "multi",

        objective:
            "Configure authentication methods",

        question:
            "Which TWO are supported modern Microsoft Entra " +
            "authentication methods?",

        options: [

            "Microsoft Authenticator",

            "FIDO2 passkeys/security keys",

            "Azure Storage access keys",

            "NSG rules"

        ],

        answer:
            [0, 1],

        explanation:
            "Microsoft Authenticator and FIDO2-based credentials are " +
            "Microsoft Entra authentication methods."

    },


    {

        id:
            "SC300-AUTH-010",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement password protection",

        question:
            "Users must be prevented from choosing passwords containing " +
            "company-specific terms such as the organisation name and " +
            "product brands. Which capability should you configure?",

        options: [

            "Microsoft Entra Password Protection custom banned password list",

            "Access package policies",

            "Application Proxy",

            "Entitlement management"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra Password Protection can enforce global and " +
            "custom banned password terms."

    },


    {

        id:
            "SC300-AUTH-011",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Manage sessions",

        question:
            "A user's account has been compromised. You disable the " +
            "account and need existing sessions invalidated as quickly " +
            "as supported. What should you do?",

        options: [

            "Revoke the user's sessions",

            "Create a dynamic group",

            "Assign an access package",

            "Create an app registration"

        ],

        answer:
            [0],

        explanation:
            "Revoking sessions invalidates supported refresh tokens and " +
            "helps terminate ongoing authenticated access."

    },


    {

        id:
            "SC300-AUTH-012",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement Windows Hello for Business",

        question:
            "Windows users should authenticate using a device-bound " +
            "credential protected by biometrics or PIN rather than their " +
            "password. Which feature should you implement?",

        options: [

            "Windows Hello for Business",

            "Password hash synchronization",

            "Azure Bastion",

            "Microsoft Purview DLP"

        ],

        answer:
            [0],

        explanation:
            "Windows Hello for Business provides strong passwordless " +
            "authentication using device-bound credentials."

    },


    {

        id:
            "SC300-AUTH-013",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Implement Global Secure Access",

        question:
            "You need identity-aware private access to internal " +
            "applications without exposing those applications directly " +
            "to the public internet. Which Microsoft Entra Global Secure " +
            "Access capability should you evaluate?",

        options: [

            "Private Access",

            "Azure Storage lifecycle management",

            "Microsoft Purview Records Management",

            "Azure DNS Traffic Manager"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra Private Access provides identity-centric " +
            "private application access as part of Global Secure Access."

    },


    {

        id:
            "SC300-AUTH-014",

        domain:
            "authentication",

        type:
            "single",

        objective:
            "Configure authentication context",

        question:
            "A sensitive SharePoint action should trigger stronger " +
            "Conditional Access requirements than normal SharePoint " +
            "access. Which feature can associate a specific security " +
            "requirement with the sensitive action?",

        options: [

            "Authentication context",

            "Dynamic group membership",

            "Application collection",

            "Custom domain"

        ],

        answer:
            [0],

        explanation:
            "Authentication context allows applications and protected " +
            "actions to trigger specific Conditional Access policies."

    },



    /*
     * ========================================================
     * DOMAIN 3
     * PLAN AND IMPLEMENT WORKLOAD IDENTITIES
     * 12 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC300-WORK-001",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Select workload identities",

        question:
            "An Azure VM must access Key Vault without storing a password " +
            "or client secret. Which identity type should you prefer?",

        options: [

            "Managed identity",

            "Shared user account",

            "Guest user",

            "Break-glass account"

        ],

        answer:
            [0],

        explanation:
            "Managed identities provide Azure resources with automatically " +
            "managed Microsoft Entra identities and avoid application secrets."

    },


    {

        id:
            "SC300-WORK-002",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure managed identities",

        question:
            "The identity assigned to VM1 must remain available even if " +
            "VM1 is deleted and later be assigned to VM2. Which managed " +
            "identity type should you use?",

        options: [

            "User-assigned managed identity",

            "System-assigned managed identity",

            "Guest identity",

            "External identity"

        ],

        answer:
            [0],

        explanation:
            "A user-assigned managed identity exists as an independent " +
            "Azure resource and can be assigned to multiple supported resources."

    },


    {

        id:
            "SC300-WORK-003",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure managed identities",

        question:
            "You enable a system-assigned managed identity on App1. " +
            "What generally happens when App1 is deleted?",

        options: [

            "The managed identity lifecycle is tied to App1 and is removed.",

            "The identity remains forever as an independent resource.",

            "The identity becomes a guest user.",

            "The identity becomes a Global Administrator."

        ],

        answer:
            [0],

        explanation:
            "A system-assigned managed identity is tied to the lifecycle " +
            "of the Azure resource on which it is enabled."

    },


    {

        id:
            "SC300-WORK-004",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Manage enterprise applications",

        question:
            "Users should access a SaaS application through Microsoft Entra " +
            "single sign-on. Which Microsoft Entra object is used to " +
            "represent the application's instance in your tenant?",

        options: [

            "Enterprise application/service principal",

            "Administrative unit",

            "Access review",

            "Conditional Access named location"

        ],

        answer:
            [0],

        explanation:
            "The enterprise application experience represents a service " +
            "principal for an application instance in the tenant."

    },


    {

        id:
            "SC300-WORK-005",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Integrate on-premises applications",

        question:
            "An internal web application must be made available securely " +
            "to remote users through Microsoft Entra authentication without " +
            "placing the application directly on the public internet. " +
            "Which service should you evaluate?",

        options: [

            "Microsoft Entra Application Proxy",

            "Azure NAT Gateway",

            "Azure Storage",

            "Microsoft Purview Audit"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra Application Proxy provides remote access to " +
            "supported on-premises web applications through Microsoft Entra."

    },


    {

        id:
            "SC300-WORK-006",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure app registrations",

        question:
            "A custom application needs its own identity configuration " +
            "and must request Microsoft Graph permissions. What should " +
            "you create first?",

        options: [

            "An app registration",

            "An access review",

            "An administrative unit",

            "A Conditional Access named location"

        ],

        answer:
            [0],

        explanation:
            "App registrations define application identity, authentication " +
            "settings and API permission requirements."

    },


    {

        id:
            "SC300-WORK-007",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure API permissions",

        question:
            "A daemon application must call Microsoft Graph without a " +
            "signed-in user. Which permission model should you normally use?",

        options: [

            "Application permissions",

            "Delegated permissions only",

            "Guest permissions",

            "Conditional Access permissions"

        ],

        answer:
            [0],

        explanation:
            "Application permissions are used when an application accesses " +
            "an API as itself without an interactive signed-in user."

    },


    {

        id:
            "SC300-WORK-008",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure delegated permissions",

        question:
            "A web application calls Microsoft Graph on behalf of the " +
            "currently signed-in user. Which permission model is normally " +
            "appropriate?",

        options: [

            "Delegated permissions",

            "Application permissions only",

            "Azure RBAC Reader",

            "PIM eligible assignment"

        ],

        answer:
            [0],

        explanation:
            "Delegated permissions allow an application to act on behalf " +
            "of a signed-in user within the granted scopes."

    },


    {

        id:
            "SC300-WORK-009",

        domain:
            "workloads",

        type:
            "multi",

        objective:
            "Configure application authentication",

        question:
            "Which TWO are commonly used credentials for confidential " +
            "Microsoft Entra application authentication?",

        options: [

            "Client secret",

            "Certificate",

            "User's personal MFA code stored in the app",

            "Network security group rule"

        ],

        answer:
            [0, 1],

        explanation:
            "Confidential client applications can authenticate using " +
            "credentials such as certificates or client secrets."

    },


    {

        id:
            "SC300-WORK-010",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Configure consent",

        question:
            "An application requests a highly privileged Microsoft Graph " +
            "permission that standard users are not allowed to approve. " +
            "What type of consent is likely required?",

        options: [

            "Administrator consent",

            "Device registration consent",

            "Access review consent",

            "PIM activation"

        ],

        answer:
            [0],

        explanation:
            "Permissions requiring tenant-wide or high-privilege access " +
            "commonly require administrator consent."

    },


    {

        id:
            "SC300-WORK-011",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Manage OAuth applications",

        question:
            "Security staff discover an OAuth application requesting " +
            "suspicious permissions across Microsoft 365. Which service " +
            "can help investigate and govern OAuth apps?",

        options: [

            "Microsoft Defender for Cloud Apps",

            "Azure Bastion",

            "Microsoft Purview Records Management",

            "Windows Autopilot"

        ],

        answer:
            [0],

        explanation:
            "Defender for Cloud Apps provides capabilities for discovering, " +
            "investigating and governing OAuth applications."

    },


    {

        id:
            "SC300-WORK-012",

        domain:
            "workloads",

        type:
            "single",

        objective:
            "Manage Conditional Access app control",

        question:
            "You need real-time session controls for a cloud application, " +
            "such as restricting downloads from unmanaged devices. Which " +
            "capability should you consider?",

        options: [

            "Conditional Access App Control with Defender for Cloud Apps",

            "Azure Policy",

            "Azure Resource Manager locks",

            "Microsoft Entra group-based licensing"

        ],

        answer:
            [0],

        explanation:
            "Conditional Access App Control integrates Conditional Access " +
            "with Defender for Cloud Apps to apply real-time session controls."

    },



    /*
     * ========================================================
     * DOMAIN 4
     * PLAN AND AUTOMATE IDENTITY GOVERNANCE
     * 12 QUESTIONS
     * ========================================================
     */


    {

        id:
            "SC300-GOV-001",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Implement entitlement management",

        question:
            "Employees need a governed self-service process to request " +
            "membership in groups and access to applications required for " +
            "a project. Which Microsoft Entra capability should you use?",

        options: [

            "Entitlement management access packages",

            "Azure Storage SAS",

            "Microsoft Entra Connect Health",

            "Windows Hello for Business"

        ],

        answer:
            [0],

        explanation:
            "Access packages bundle resources with request, approval and " +
            "lifecycle policies for governed access."

    },


    {

        id:
            "SC300-GOV-002",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Configure access package catalogs",

        question:
            "You need a logical container for the groups, applications " +
            "and SharePoint resources that can later be exposed through " +
            "access packages. What should you create?",

        options: [

            "A catalog",

            "An authentication context",

            "A named location",

            "A managed identity"

        ],

        answer:
            [0],

        explanation:
            "Entitlement management catalogs contain the resources that " +
            "can be made available through access packages."

    },


    {

        id:
            "SC300-GOV-003",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Manage access requests",

        question:
            "External contractors may request ProjectX access, but the " +
            "project owner must approve every request. Where should you " +
            "configure this requirement?",

        options: [

            "The access package assignment policy",

            "A Windows Update ring",

            "An Azure NSG",

            "A storage lifecycle rule"

        ],

        answer:
            [0],

        explanation:
            "Access package assignment policies define who may request " +
            "access and any approval requirements."

    },


    {

        id:
            "SC300-GOV-004",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Implement access reviews",

        question:
            "Group owners must periodically confirm whether users still " +
            "require membership in privileged groups. Which feature should " +
            "you configure?",

        options: [

            "Access reviews",

            "Cross-tenant synchronization",

            "Application Proxy",

            "Password protection"

        ],

        answer:
            [0],

        explanation:
            "Access reviews provide recurring review workflows for group, " +
            "application and privileged access."

    },


    {

        id:
            "SC300-GOV-005",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Implement Privileged Identity Management",

        question:
            "User1 should be able to activate the Global Administrator " +
            "role only when needed rather than holding permanent active " +
            "membership. What should you configure?",

        options: [

            "An eligible PIM assignment",

            "A permanent active role assignment",

            "A dynamic group",

            "A guest account"

        ],

        answer:
            [0],

        explanation:
            "PIM eligible assignments allow users to activate privileged " +
            "roles only when required."

    },


    {

        id:
            "SC300-GOV-006",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Configure PIM activation",

        question:
            "Administrators activating a privileged role must provide " +
            "justification and receive approval before activation. " +
            "Where should you configure these controls?",

        options: [

            "PIM role settings",

            "Group-based licensing",

            "Application Proxy",

            "Microsoft Entra Connect Sync"

        ],

        answer:
            [0],

        explanation:
            "PIM role settings define activation requirements such as " +
            "MFA, justification, approval and activation duration."

    },


    {

        id:
            "SC300-GOV-007",

        domain:
            "governance",

        type:
            "multi",

        objective:
            "Plan privileged access",

        question:
            "Which TWO practices are appropriate for emergency " +
            "break-glass Microsoft Entra accounts?",

        options: [

            "Maintain highly secured emergency-access accounts",

            "Monitor their sign-in activity closely",

            "Use the same password as normal administrator accounts",

            "Use them for everyday administration"

        ],

        answer:
            [0, 1],

        explanation:
            "Emergency access accounts should be tightly secured, monitored " +
            "and reserved for exceptional recovery scenarios."

    },


    {

        id:
            "SC300-GOV-008",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Monitor identity activity",

        question:
            "You need to investigate who changed a Microsoft Entra group " +
            "membership yesterday. Which log should you examine?",

        options: [

            "Microsoft Entra audit logs",

            "Sign-in logs only",

            "Azure Advisor",

            "Microsoft Defender Antivirus history"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra audit logs record directory-management " +
            "operations such as changes to users, groups and applications."

    },


    {

        id:
            "SC300-GOV-009",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Monitor sign-ins",

        question:
            "You need to investigate the source IP, authentication method, " +
            "Conditional Access result and application involved in a user's " +
            "login. Which data source should you inspect?",

        options: [

            "Microsoft Entra sign-in logs",

            "Azure Resource Graph",

            "Azure Cost Management",

            "Microsoft Purview Records Management"

        ],

        answer:
            [0],

        explanation:
            "Sign-in logs provide detailed information about Microsoft " +
            "Entra authentication events."

    },


    {

        id:
            "SC300-GOV-010",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Configure diagnostic settings",

        question:
            "Microsoft Entra logs must be retained and queried using Kusto " +
            "Query Language. Where should you send the logs?",

        options: [

            "A Log Analytics workspace",

            "An administrative unit",

            "An access package",

            "A custom domain"

        ],

        answer:
            [0],

        explanation:
            "Microsoft Entra diagnostic settings can send supported logs " +
            "to Log Analytics, where they can be queried using KQL."

    },


    {

        id:
            "SC300-GOV-011",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Monitor identity security posture",

        question:
            "You want Microsoft's recommendations for improving your " +
            "identity security configuration and a score reflecting your " +
            "current posture. Which feature should you review?",

        options: [

            "Identity Secure Score",

            "Azure Storage capacity",

            "Windows Experience Index",

            "Application Gateway health"

        ],

        answer:
            [0],

        explanation:
            "Identity Secure Score provides identity-security improvement " +
            "recommendations and posture measurement."

    },


    {

        id:
            "SC300-GOV-012",

        domain:
            "governance",

        type:
            "single",

        objective:
            "Manage external-user lifecycle",

        question:
            "External project users receive access through an access " +
            "package. Their access should automatically end when the " +
            "assignment expires. Which Microsoft Entra capability is " +
            "designed to manage this lifecycle?",

        options: [

            "Entitlement management",

            "Azure Firewall",

            "Application Gateway",

            "Azure Bastion"

        ],

        answer:
            [0],

        explanation:
            "Entitlement management can govern external user access and " +
            "automatically remove resource assignments based on access-package " +
            "lifecycle policies."

    }

];



/*
 * ============================================================
 * VALIDATION
 * ============================================================
 */


(function validateSC300QuestionBank() {


    const domainCounts = {

        identities:
            0,

        authentication:
            0,

        workloads:
            0,

        governance:
            0

    };


    const ids =
        new Set();


    if (
        SC300_QUESTIONS.length !==
        SC300_EXAM.questionCount
    ) {

        throw new Error(

            "SC-300 question-bank error: expected " +
            SC300_EXAM.questionCount +
            " questions but found " +
            SC300_QUESTIONS.length +
            "."

        );

    }


    SC300_QUESTIONS.forEach(
        (question) => {


            if (
                !question.id ||
                typeof question.id !==
                "string"
            ) {

                throw new Error(
                    "SC-300 question-bank error: invalid question ID."
                );

            }


            if (
                ids.has(
                    question.id
                )
            ) {

                throw new Error(

                    "SC-300 question-bank error: duplicate ID " +
                    question.id

                );

            }


            ids.add(
                question.id
            );


            if (
                !Object.prototype.hasOwnProperty.call(
                    SC300_EXAM.domains,
                    question.domain
                )
            ) {

                throw new Error(

                    "SC-300 question-bank error: unknown domain " +
                    question.domain +
                    " on " +
                    question.id

                );

            }


            domainCounts[
                question.domain
            ]++;


            if (
                question.type !==
                "single" &&
                question.type !==
                "multi"
            ) {

                throw new Error(

                    "SC-300 question-bank error: invalid type on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length <
                2
            ) {

                throw new Error(

                    "SC-300 question-bank error: invalid options on " +
                    question.id

                );

            }


            if (
                !Array.isArray(
                    question.answer
                ) ||
                question.answer.length ===
                0
            ) {

                throw new Error(

                    "SC-300 question-bank error: missing answer on " +
                    question.id

                );

            }


            if (
                question.type ===
                "single" &&
                question.answer.length !==
                1
            ) {

                throw new Error(

                    "SC-300 question-bank error: single-answer question " +
                    question.id +
                    " has multiple answers."

                );

            }


            question.answer.forEach(
                (index) => {

                    if (
                        !Number.isInteger(
                            index
                        ) ||
                        index < 0 ||
                        index >=
                        question.options.length
                    ) {

                        throw new Error(

                            "SC-300 question-bank error: invalid answer index on " +
                            question.id

                        );

                    }

                }
            );

        }
    );


    Object.entries(
        SC300_EXAM.domains
    ).forEach(
        (
            [
                domainId,
                domain
            ]
        ) => {


            const actual =
                domainCounts[
                    domainId
                ];


            const expected =
                domain.simulatorQuestions;


            if (
                actual !==
                expected
            ) {

                throw new Error(

                    "SC-300 weighting error for " +
                    domain.name +
                    ": expected " +
                    expected +
                    " questions but found " +
                    actual +
                    "."

                );

            }


            const percentage =

                (
                    actual /
                    SC300_EXAM.questionCount
                ) *
                100;


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "SC-300 weighting error: " +
                    domain.name +
                    " is " +
                    percentage +
                    "% but Microsoft's published range is " +
                    domain.minWeight +
                    "–" +
                    domain.maxWeight +
                    "%."

                );

            }

        }
    );


    console.info(
        "[365in5] SC-300 question bank validated."
    );


    console.info(
        "[365in5] SC-300 weighting:",
        domainCounts
    );


})();



/*
 * ============================================================
 * EXPOSE TO GENERIC SIMULATOR
 * ============================================================
 */


window.EXAM_CONFIG =
    SC300_EXAM;


window.EXAM_QUESTIONS =
    SC300_QUESTIONS;

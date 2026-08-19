/*
 * ============================================================
 * 365in5 EXAM SIMULATOR
 * AZ-104 — MICROSOFT AZURE ADMINISTRATOR
 * ============================================================
 *
 * PURPOSE
 * -------
 * Configuration and original practice-question bank for the
 * 365in5 AZ-104 simulator.
 *
 * CURRENT BLUEPRINT
 * -----------------
 * Skills measured:
 * 17 April 2026
 *
 * Microsoft published weighting:
 *
 * 1. Manage Azure identities and governance
 *    20–25%
 *
 * 2. Implement and manage storage
 *    15–20%
 *
 * 3. Deploy and manage Azure compute resources
 *    20–25%
 *
 * 4. Implement and manage virtual networking
 *    15–20%
 *
 * 5. Monitor and maintain Azure resources
 *    10–15%
 *
 * 365in5 50-question allocation:
 *
 * Identity/Governance: 12 = 24%
 * Storage:              9 = 18%
 * Compute:             12 = 24%
 * Networking:          10 = 20%
 * Monitoring:           7 = 14%
 *
 * TOTAL:               50 = 100%
 *
 * IMPORTANT
 * ---------
 * These are original practice questions.
 *
 * They are NOT Microsoft exam questions and are NOT sourced
 * from exam dumps or leaked examination material.
 *
 * ============================================================
 */


"use strict";


/*
 * ============================================================
 * EXAM CONFIGURATION
 * ============================================================
 */


const AZ104_EXAM = {

    /*
     * Internal exam identifier.
     */

    id: "az-104",


    /*
     * Display information.
     */

    code: "AZ-104",

    title: "Microsoft Azure Administrator",

    category: "Microsoft Azure",

    description:
        "Practice managing Azure identities, governance, storage, " +
        "compute, virtual networking and monitoring under realistic " +
        "simulated exam conditions.",


    /*
     * Blueprint metadata.
     */

    blueprintVersion: "2026-04-17",

    blueprintLabel: "Skills measured as of 17 April 2026",


    /*
     * Exam configuration.
     */

    questionCount: 50,

    durationMinutes: 100,

    simulatedPassingScore: 700,


    /*
     * ========================================================
     * DOMAIN CONFIGURATION
     * ========================================================
     *
     * minWeight / maxWeight:
     * Microsoft's published range.
     *
     * simulatorQuestions:
     * Number selected by the 365in5 simulator.
     *
     */


    domains: {


        identity: {

            name:
                "Manage Azure identities and governance",

            minWeight: 20,

            maxWeight: 25,

            simulatorQuestions: 12

        },


        storage: {

            name:
                "Implement and manage storage",

            minWeight: 15,

            maxWeight: 20,

            simulatorQuestions: 9

        },


        compute: {

            name:
                "Deploy and manage Azure compute resources",

            minWeight: 20,

            maxWeight: 25,

            simulatorQuestions: 12

        },


        networking: {

            name:
                "Implement and manage virtual networking",

            minWeight: 15,

            maxWeight: 20,

            simulatorQuestions: 10

        },


        monitoring: {

            name:
                "Monitor and maintain Azure resources",

            minWeight: 10,

            maxWeight: 15,

            simulatorQuestions: 7

        }

    }

};



/*
 * ============================================================
 * QUESTION BANK
 * ============================================================
 */


const AZ104_QUESTIONS = [


    /*
     * ========================================================
     * DOMAIN 1
     *
     * MANAGE AZURE IDENTITIES AND GOVERNANCE
     *
     * 12 QUESTIONS
     * 24% OF SIMULATED EXAM
     * ========================================================
     */


    {

        id: "AZ104-IDENTITY-001",

        domain: "identity",

        type: "single",

        objective:
            "Manage Azure role-based access control",

        question:
            "You need to allow a support engineer to restart " +
            "virtual machines in ResourceGroup1. The engineer " +
            "must not be able to create, delete, resize or " +
            "reconfigure the virtual machines. What should you do?",

        options: [

            "Assign the Contributor role at the subscription scope.",

            "Assign the Virtual Machine Contributor role at ResourceGroup1.",

            "Create a custom Azure RBAC role containing only the required read and restart actions and assign it at ResourceGroup1.",

            "Assign the Reader role at ResourceGroup1."

        ],

        answer: [2],

        explanation:
            "A custom Azure RBAC role provides the closest match " +
            "to least privilege. Virtual Machine Contributor would " +
            "allow substantially more VM-management operations than " +
            "the engineer requires."

    },


    {

        id: "AZ104-IDENTITY-002",

        domain: "identity",

        type: "single",

        objective:
            "Manage Azure role-based access control",

        scenario:
            "Subscription1 contains ResourceGroup1. " +
            "User1 has the Reader role assigned at Subscription1 " +
            "and the Contributor role assigned at ResourceGroup1.",

        question:
            "What effective permissions does User1 have for " +
            "resources in ResourceGroup1?",

        options: [

            "Reader only",

            "Contributor",

            "Owner",

            "No access because the assignments conflict"

        ],

        answer: [1],

        explanation:
            "Azure RBAC role assignments are generally additive. " +
            "The Contributor assignment applies within " +
            "ResourceGroup1 while Reader continues to apply " +
            "elsewhere in Subscription1."

    },


    {

        id: "AZ104-IDENTITY-003",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        question:
            "Administrators must be able to modify resources in " +
            "ResourceGroup1, but you must prevent accidental deletion " +
            "of those resources. Which lock should you apply?",

        options: [

            "ReadOnly",

            "CanNotDelete",

            "Audit",

            "Deny"

        ],

        answer: [1],

        explanation:
            "A CanNotDelete lock prevents deletion while still " +
            "allowing authorized users to modify resources. " +
            "A ReadOnly lock would prevent modification operations."

    },


    {

        id: "AZ104-IDENTITY-004",

        domain: "identity",

        type: "multi",

        objective:
            "Manage subscriptions and governance",

        question:
            "Which TWO statements about Azure management groups " +
            "are correct?",

        options: [

            "A subscription can simultaneously have multiple parent management groups.",

            "Management groups can be nested.",

            "Azure Policy assignments at a management group can be inherited by child subscriptions.",

            "Resource groups can be direct children of management groups."

        ],

        answer: [1, 2],

        explanation:
            "Management groups can form a hierarchy and governance " +
            "controls such as Azure Policy can be inherited by child " +
            "subscriptions. A subscription has one parent in the " +
            "management-group hierarchy."

    },


    {

        id: "AZ104-IDENTITY-005",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        question:
            "Every resource deployed to Subscription1 must contain " +
            "a CostCenter tag. Deployments that do not contain the " +
            "tag must fail. Which Azure Policy effect should you use?",

        options: [

            "Audit",

            "Deny",

            "Disabled",

            "AuditIfNotExists"

        ],

        answer: [1],

        explanation:
            "The Deny effect prevents a resource request that does " +
            "not comply with the policy. Audit identifies " +
            "noncompliance but does not block deployment."

    },


    {

        id: "AZ104-IDENTITY-006",

        domain: "identity",

        type: "single",

        objective:
            "Manage Microsoft Entra identities",

        question:
            "An application running in Azure App Service needs to " +
            "access Azure Key Vault. You must avoid storing a client " +
            "secret or password in the application. What should you use?",

        options: [

            "A shared access signature",

            "A managed identity",

            "A storage account key",

            "A local Windows account"

        ],

        answer: [1],

        explanation:
            "A managed identity gives the Azure resource an identity " +
            "in Microsoft Entra ID without requiring the application " +
            "to manage credentials."

    },


    {

        id: "AZ104-IDENTITY-007",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        question:
            "Resources deployed without a Department tag must " +
            "automatically receive Department=General. Which Azure " +
            "Policy effect is most appropriate?",

        options: [

            "Modify",

            "Deny",

            "Audit",

            "Disabled"

        ],

        answer: [0],

        explanation:
            "The Modify effect can add, update or remove supported " +
            "properties and tags during resource evaluation."

    },


    {

        id: "AZ104-IDENTITY-008",

        domain: "identity",

        type: "multi",

        objective:
            "Manage Azure role-based access control",

        question:
            "At which TWO scopes can you directly assign an Azure " +
            "RBAC role?",

        options: [

            "Management group",

            "Subscription",

            "Availability zone",

            "Azure region"

        ],

        answer: [0, 1],

        explanation:
            "Azure RBAC assignments can be made at management-group, " +
            "subscription, resource-group and individual-resource " +
            "scopes. Regions and availability zones are not RBAC scopes."

    },


    {

        id: "AZ104-IDENTITY-009",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        scenario:
            "Policy1 is assigned to ManagementGroup1. " +
            "Subscription1 is a child of ManagementGroup1. " +
            "ResourceGroup1 exists in Subscription1.",

        question:
            "Assuming there are no exclusions, which resources can " +
            "Policy1 evaluate?",

        options: [

            "Only resources directly associated with ManagementGroup1",

            "Subscription1 but not its resource groups",

            "Applicable resources in Subscription1 and its descendants",

            "Only resources created after Policy1 was assigned"

        ],

        answer: [2],

        explanation:
            "Azure Policy assignments are inherited down the Azure " +
            "resource hierarchy unless an exclusion or other scope " +
            "restriction applies."

    },


    {

        id: "AZ104-IDENTITY-010",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        question:
            "You need to determine which administrator changed a " +
            "network security group rule yesterday. What should you " +
            "review first?",

        options: [

            "Azure Activity Log",

            "Azure Advisor",

            "Azure Service Health",

            "Microsoft Entra sign-in logs only"

        ],

        answer: [0],

        explanation:
            "The Azure Activity Log records subscription-level " +
            "control-plane operations, including resource changes " +
            "and the identity responsible for them."

    },


    {

        id: "AZ104-IDENTITY-011",

        domain: "identity",

        type: "single",

        objective:
            "Manage Azure role-based access control",

        question:
            "A contractor requires read-only access to every resource " +
            "in Subscription1. You want to create the minimum number " +
            "of role assignments. What should you do?",

        options: [

            "Assign Reader separately to every resource.",

            "Assign Reader to every resource group.",

            "Assign Reader at Subscription1.",

            "Assign Reader at the tenant root management group."

        ],

        answer: [2],

        explanation:
            "A Reader assignment at the subscription scope is inherited " +
            "by its resource groups and resources while avoiding access " +
            "to unrelated subscriptions."

    },


    {

        id: "AZ104-IDENTITY-012",

        domain: "identity",

        type: "single",

        objective:
            "Manage subscriptions and governance",

        question:
            "Your organisation must prevent administrators from " +
            "deploying public IP addresses into a production " +
            "subscription. Which service should provide the primary " +
            "governance control?",

        options: [

            "Azure Policy",

            "Azure Monitor",

            "Azure Bastion",

            "Azure DNS"

        ],

        answer: [0],

        explanation:
            "Azure Policy evaluates and enforces resource configuration " +
            "requirements. A policy with an appropriate Deny condition " +
            "can prevent public IP resource deployments."

    },



    /*
     * ========================================================
     * DOMAIN 2
     *
     * IMPLEMENT AND MANAGE STORAGE
     *
     * 9 QUESTIONS
     * 18% OF SIMULATED EXAM
     * ========================================================
     */


    {

        id: "AZ104-STORAGE-001",

        domain: "storage",

        type: "single",

        objective:
            "Configure Azure Storage redundancy",

        question:
            "A storage account must replicate data to a secondary " +
            "Azure region. Applications must also be able to read " +
            "from the secondary region before Microsoft or an " +
            "administrator initiates failover. Which redundancy " +
            "option should you use?",

        options: [

            "LRS",

            "ZRS",

            "GRS",

            "RA-GRS"

        ],

        answer: [3],

        explanation:
            "Read-access geo-redundant storage replicates data to a " +
            "secondary region and exposes a read-only secondary endpoint."

    },


    {

        id: "AZ104-STORAGE-002",

        domain: "storage",

        type: "single",

        objective:
            "Configure access to storage",

        question:
            "A third-party organisation needs read access to one " +
            "blob for four hours. You must not disclose a storage " +
            "account access key. What should you provide?",

        options: [

            "A time-limited shared access signature with read permission",

            "The primary storage account key",

            "The complete storage account connection string",

            "The Owner role at subscription scope"

        ],

        answer: [0],

        explanation:
            "A shared access signature can delegate limited permissions " +
            "to storage resources for a defined period without exposing " +
            "the storage account key."

    },


    {

        id: "AZ104-STORAGE-003",

        domain: "storage",

        type: "single",

        objective:
            "Manage Azure Blob Storage",

        question:
            "Blobs that have not been modified for 90 days should " +
            "automatically move to a lower-cost access tier. What " +
            "should you configure?",

        options: [

            "Azure Files snapshots",

            "Blob lifecycle management",

            "A resource lock",

            "An Azure RBAC custom role"

        ],

        answer: [1],

        explanation:
            "Azure Blob Storage lifecycle management can automatically " +
            "transition blobs between supported access tiers based on " +
            "conditions such as age."

    },


    {

        id: "AZ104-STORAGE-004",

        domain: "storage",

        type: "multi",

        objective:
            "Manage Azure Blob Storage",

        question:
            "Which TWO Azure Blob Storage features can help recover " +
            "data after accidental deletion or modification?",

        options: [

            "Blob soft delete",

            "Blob versioning",

            "Changing the storage redundancy after deletion",

            "A network security group"

        ],

        answer: [0, 1],

        explanation:
            "Soft delete retains deleted data for a configured period. " +
            "Blob versioning can preserve previous versions when a blob " +
            "is modified or deleted."

    },


    {

        id: "AZ104-STORAGE-005",

        domain: "storage",

        type: "single",

        objective:
            "Manage Azure Files",

        question:
            "Windows clients need to mount a managed Azure file share " +
            "using SMB. Which storage service should you configure?",

        options: [

            "Azure Files",

            "Azure Queue Storage",

            "Azure Table Storage",

            "Azure Managed Disks"

        ],

        answer: [0],

        explanation:
            "Azure Files provides managed file shares that can be " +
            "accessed using SMB and, for supported configurations, NFS."

    },


    {

        id: "AZ104-STORAGE-006",

        domain: "storage",

        type: "single",

        objective:
            "Secure Azure Storage",

        question:
            "StorageAccount1 must reject connections from arbitrary " +
            "public internet addresses while continuing to permit " +
            "approved network locations. What should you configure?",

        options: [

            "Storage account networking and firewall rules",

            "Blob inventory",

            "Static website hosting",

            "Object replication"

        ],

        answer: [0],

        explanation:
            "Azure Storage networking controls can restrict access " +
            "using public network settings, selected networks, IP " +
            "rules and private connectivity."

    },


    {

        id: "AZ104-STORAGE-007",

        domain: "storage",

        type: "single",

        objective:
            "Secure Azure Storage",

        question:
            "An application in VNet1 must connect to StorageAccount1 " +
            "using a private IP address from VNet1. What should you create?",

        options: [

            "A service tag only",

            "A private endpoint",

            "A public load balancer",

            "An Application Gateway"

        ],

        answer: [1],

        explanation:
            "A private endpoint uses Azure Private Link to expose a " +
            "supported Azure service through a private IP address " +
            "inside the virtual network."

    },


    {

        id: "AZ104-STORAGE-008",

        domain: "storage",

        type: "multi",

        objective:
            "Configure access to storage",

        question:
            "Which TWO statements about Azure Storage account access " +
            "keys are correct?",

        options: [

            "They provide highly privileged access and must be protected.",

            "Azure Storage provides two account keys to support key rotation.",

            "Each account key is automatically limited to one blob container.",

            "Account keys can only read data and cannot modify it."

        ],

        answer: [0, 1],

        explanation:
            "Storage account keys are powerful shared credentials. " +
            "Two keys are provided so applications can continue using " +
            "one key while the other is rotated."

    },


    {

        id: "AZ104-STORAGE-009",

        domain: "storage",

        type: "single",

        objective:
            "Manage Azure Storage",

        question:
            "You need to transfer a large amount of data between " +
            "Azure Storage locations from the command line. Which " +
            "Microsoft utility is specifically designed for this purpose?",

        options: [

            "AzCopy",

            "Azure Advisor",

            "Network Watcher",

            "Azure Resource Graph"

        ],

        answer: [0],

        explanation:
            "AzCopy is Microsoft's command-line utility for transferring " +
            "data to and from Azure Storage."

    },



    /*
     * ========================================================
     * DOMAIN 3
     *
     * DEPLOY AND MANAGE AZURE COMPUTE RESOURCES
     *
     * 12 QUESTIONS
     * 24% OF SIMULATED EXAM
     * ========================================================
     */


    {

        id: "AZ104-COMPUTE-001",

        domain: "compute",

        type: "single",

        objective:
            "Automate deployment of virtual machines",

        question:
            "An application requires a group of identical Azure " +
            "virtual machines that automatically increases and " +
            "decreases the number of instances according to demand. " +
            "What should you deploy?",

        options: [

            "Virtual Machine Scale Sets",

            "An availability set",

            "Azure Bastion",

            "A dedicated host only"

        ],

        answer: [0],

        explanation:
            "Virtual Machine Scale Sets provide management and " +
            "autoscaling for groups of VM instances."

    },


    {

        id: "AZ104-COMPUTE-002",

        domain: "compute",

        type: "single",

        objective:
            "Configure availability of virtual machines",

        question:
            "Two production VMs must remain isolated from a failure " +
            "of a single datacenter in an Azure region that supports " +
            "availability zones. What should you do?",

        options: [

            "Deploy both VMs into the same availability set.",

            "Deploy the VMs into different availability zones.",

            "Deploy both VMs into one proximity placement group.",

            "Place both VMs in the same fault domain."

        ],

        answer: [1],

        explanation:
            "Availability zones are physically separate datacenter " +
            "groupings within a region and provide isolation from " +
            "datacenter-level failures."

    },


    {

        id: "AZ104-COMPUTE-003",

        domain: "compute",

        type: "single",

        objective:
            "Create and configure Azure App Service",

        question:
            "You need to host a containerized HTTP web application " +
            "without administering the underlying virtual machines. " +
            "Which service is the most direct fit?",

        options: [

            "Azure App Service",

            "Azure DNS",

            "Azure Route Server",

            "Azure Queue Storage"

        ],

        answer: [0],

        explanation:
            "Azure App Service is a managed platform for hosting web " +
            "applications and supports containerized application deployments."

    },


    {

        id: "AZ104-COMPUTE-004",

        domain: "compute",

        type: "single",

        objective:
            "Create and configure Azure App Service",

        question:
            "You need to deploy a new version of an App Service " +
            "application to a separate live endpoint, test it, and " +
            "then exchange it with the production version. What " +
            "should you configure?",

        options: [

            "Deployment slots",

            "Availability sets",

            "Management groups",

            "Resource locks"

        ],

        answer: [0],

        explanation:
            "App Service deployment slots provide separate live " +
            "environments and support swapping a validated deployment " +
            "into production."

    },


    {

        id: "AZ104-COMPUTE-005",

        domain: "compute",

        type: "multi",

        objective:
            "Configure scaling for Azure App Service",

        question:
            "Which TWO actions represent scaling an Azure App Service?",

        options: [

            "Move to a larger App Service plan tier.",

            "Increase the number of application instances.",

            "Increase the depth of the management-group hierarchy.",

            "Add an NSG inbound rule."

        ],

        answer: [0, 1],

        explanation:
            "Scaling up changes the capacity or tier of the App Service " +
            "plan. Scaling out changes the number of instances."

    },


    {

        id: "AZ104-COMPUTE-006",

        domain: "compute",

        type: "single",

        objective:
            "Provision containers",

        question:
            "You need to run a Linux container in Azure without " +
            "provisioning a VM or deploying a container orchestrator. " +
            "Which service should you use?",

        options: [

            "Azure Container Instances",

            "Azure Virtual Desktop",

            "Azure Files",

            "Azure Policy"

        ],

        answer: [0],

        explanation:
            "Azure Container Instances provides direct container " +
            "execution without requiring customers to manage VMs or " +
            "an orchestration cluster."

    },


    {

        id: "AZ104-COMPUTE-007",

        domain: "compute",

        type: "single",

        objective:
            "Automate deployment of resources",

        question:
            "You need a repeatable declarative deployment containing " +
            "a virtual network, network security group and several " +
            "virtual machines. Which approach should you use?",

        options: [

            "Bicep or ARM templates",

            "Manual portal deployment only",

            "Azure Activity Log",

            "Network Watcher packet capture"

        ],

        answer: [0],

        explanation:
            "Bicep and ARM templates provide declarative " +
            "infrastructure-as-code deployment for Azure resources."

    },


    {

        id: "AZ104-COMPUTE-008",

        domain: "compute",

        type: "single",

        objective:
            "Manage Azure virtual machines",

        question:
            "An administrator shuts down VM1 from inside Windows. " +
            "You notice that Azure still shows the VM as allocated. " +
            "What must you do to release the Azure compute allocation?",

        options: [

            "Restart Windows.",

            "Deallocate the VM in Azure.",

            "Delete the virtual network.",

            "Convert the VM to a Spot VM."

        ],

        answer: [1],

        explanation:
            "Stopping the guest operating system does not necessarily " +
            "deallocate the Azure VM. Deallocation releases the compute " +
            "resources assigned to the VM."

    },


    {

        id: "AZ104-COMPUTE-009",

        domain: "compute",

        type: "single",

        objective:
            "Manage Azure virtual machines",

        question:
            "VM1 requires additional CPU and memory. The operating " +
            "system and applications must remain on VM1. What should " +
            "you do?",

        options: [

            "Resize VM1 to a supported VM size.",

            "Move VM1 to another management group.",

            "Convert its virtual network into a resource group.",

            "Change the Microsoft Entra tenant ID."

        ],

        answer: [0],

        explanation:
            "Azure virtual machines can be resized to another supported " +
            "VM size, subject to compatibility and available capacity."

    },


    {

        id: "AZ104-COMPUTE-010",

        domain: "compute",

        type: "single",

        objective:
            "Configure Virtual Machine Scale Sets",

        question:
            "A Virtual Machine Scale Set must automatically add " +
            "instances when average CPU usage remains above a defined " +
            "threshold. What should you configure?",

        options: [

            "Autoscale settings",

            "A resource lock",

            "An Azure DNS alias",

            "A storage lifecycle rule"

        ],

        answer: [0],

        explanation:
            "Azure autoscale rules can adjust scale-set instance count " +
            "in response to metrics such as CPU utilisation."

    },


    {

        id: "AZ104-COMPUTE-011",

        domain: "compute",

        type: "multi",

        objective:
            "Configure availability of virtual machines",

        question:
            "Which TWO infrastructure failure or maintenance boundaries " +
            "are associated with Azure availability sets?",

        options: [

            "Fault domains",

            "Update domains",

            "Azure paired regions",

            "DNS zones"

        ],

        answer: [0, 1],

        explanation:
            "Availability sets distribute VMs across fault domains " +
            "and update domains to reduce the effect of hardware " +
            "failure and planned platform maintenance."

    },


    {

        id: "AZ104-COMPUTE-012",

        domain: "compute",

        type: "single",

        objective:
            "Create and configure Azure App Service",

        question:
            "You need to host a REST API while allowing Azure to " +
            "manage the underlying operating system. You also need " +
            "application settings, TLS and custom-domain support. " +
            "Which service should you use?",

        options: [

            "Azure App Service",

            "Azure ExpressRoute",

            "Azure Firewall",

            "Azure Monitor action groups"

        ],

        answer: [0],

        explanation:
            "Azure App Service is a managed application platform for " +
            "web applications and APIs and provides application " +
            "configuration, TLS and custom-domain capabilities."

    },



    /*
     * ========================================================
     * DOMAIN 4
     *
     * IMPLEMENT AND MANAGE VIRTUAL NETWORKING
     *
     * 10 QUESTIONS
     * 20% OF SIMULATED EXAM
     * ========================================================
     */


    {

        id: "AZ104-NETWORKING-001",

        domain: "networking",

        type: "single",

        objective:
            "Configure network security groups",

        question:
            "You need to permit inbound HTTPS traffic to resources " +
            "in Subnet1 while continuing to block unsolicited inbound " +
            "traffic on other ports. Which resource should contain " +
            "the security rule?",

        options: [

            "Network security group",

            "Route table",

            "Azure DNS zone",

            "Management group"

        ],

        answer: [0],

        explanation:
            "Network security groups contain inbound and outbound " +
            "security rules that filter supported Azure network traffic."

    },


    {

        id: "AZ104-NETWORKING-002",

        domain: "networking",

        type: "single",

        objective:
            "Configure virtual network connectivity",

        question:
            "VM1 is in VNet1 and VM2 is in VNet2. Both virtual " +
            "networks are in Azure. You need private IP connectivity " +
            "between the VMs without deploying a VPN gateway. What " +
            "should you configure?",

        options: [

            "Virtual network peering",

            "A public load balancer",

            "Traffic Manager",

            "A NAT Gateway"

        ],

        answer: [0],

        explanation:
            "Virtual network peering provides private connectivity " +
            "between Azure virtual networks using Microsoft's backbone."

    },


    {

        id: "AZ104-NETWORKING-003",

        domain: "networking",

        type: "single",

        objective:
            "Configure name resolution",

        question:
            "A storage account is accessed through a private endpoint. " +
            "Clients in VNet1 must resolve the storage service hostname " +
            "to the endpoint's private IP address. Which Azure resource " +
            "is commonly used for this?",

        options: [

            "Azure Private DNS zone",

            "Public IP prefix",

            "Application security group",

            "Azure Policy exemption"

        ],

        answer: [0],

        explanation:
            "Azure Private DNS zones are commonly integrated with " +
            "private endpoints so service names resolve to private " +
            "endpoint addresses."

    },


    {

        id: "AZ104-NETWORKING-004",

        domain: "networking",

        type: "single",

        objective:
            "Configure network routing",

        question:
            "Private virtual machines in Subnet1 require outbound " +
            "internet access. They must share a predictable public " +
            "source IP without receiving individual public IP addresses. " +
            "Which service should you use?",

        options: [

            "NAT Gateway",

            "Azure Bastion",

            "Private DNS zone",

            "Azure Route Server"

        ],

        answer: [0],

        explanation:
            "Azure NAT Gateway provides scalable outbound internet " +
            "connectivity for subnet resources using configured " +
            "public IP addresses or prefixes."

    },


    {

        id: "AZ104-NETWORKING-005",

        domain: "networking",

        type: "multi",

        objective:
            "Configure hybrid connectivity",

        question:
            "Which TWO Azure resources are commonly configured for " +
            "a site-to-site VPN between an on-premises network and " +
            "an Azure virtual network?",

        options: [

            "Virtual network gateway",

            "Local network gateway",

            "Azure Files share",

            "App Service deployment slot"

        ],

        answer: [0, 1],

        explanation:
            "A site-to-site VPN commonly uses an Azure VPN gateway " +
            "and a local network gateway that represents the " +
            "on-premises VPN endpoint and address spaces."

    },


    {

        id: "AZ104-NETWORKING-006",

        domain: "networking",

        type: "single",

        objective:
            "Configure load balancing",

        question:
            "You need to distribute TCP connections across several " +
            "Azure virtual machines at layer 4. Which service should " +
            "you use?",

        options: [

            "Azure Load Balancer",

            "Azure Private DNS Resolver",

            "Azure Policy",

            "Azure Monitor Workbook"

        ],

        answer: [0],

        explanation:
            "Azure Load Balancer operates at layer 4 and distributes " +
            "TCP and UDP traffic across backend resources."

    },


    {

        id: "AZ104-NETWORKING-007",

        domain: "networking",

        type: "single",

        objective:
            "Configure load balancing",

        question:
            "A web application requires layer-7 routing based on " +
            "URL paths and host names. You also require an optional " +
            "web application firewall. Which service should you deploy?",

        options: [

            "Azure Application Gateway",

            "NAT Gateway",

            "Network Watcher",

            "Azure VPN Gateway"

        ],

        answer: [0],

        explanation:
            "Application Gateway provides layer-7 web traffic routing " +
            "and supports Web Application Firewall capabilities."

    },


    {

        id: "AZ104-NETWORKING-008",

        domain: "networking",

        type: "single",

        objective:
            "Configure network security groups",

        scenario:
            "Subnet1 has NSG-Subnet associated with it. " +
            "VM1 is in Subnet1 and the network interface of VM1 " +
            "has NSG-NIC associated with it.",

        question:
            "For inbound traffic to successfully reach VM1, what " +
            "must occur?",

        options: [

            "The traffic must be allowed by the applicable rules at both the subnet and NIC levels.",

            "Only NSG-Subnet needs to allow the traffic.",

            "Only NSG-NIC needs to allow the traffic.",

            "At least one of the NSGs must explicitly deny the traffic."

        ],

        answer: [0],

        explanation:
            "When network security groups apply at both subnet and " +
            "NIC levels, traffic must pass the effective security " +
            "rules at each applicable layer."

    },


    {

        id: "AZ104-NETWORKING-009",

        domain: "networking",

        type: "single",

        objective:
            "Configure network routing",

        question:
            "Traffic from Subnet1 must pass through a network virtual " +
            "appliance instead of following the default Azure system " +
            "route. What should you configure?",

        options: [

            "A route table containing a user-defined route",

            "An Azure Policy initiative",

            "A resource lock",

            "A private DNS record only"

        ],

        answer: [0],

        explanation:
            "User-defined routes can override appropriate Azure system " +
            "routes and specify a virtual appliance as the next hop."

    },


    {

        id: "AZ104-NETWORKING-010",

        domain: "networking",

        type: "single",

        objective:
            "Configure secure access to virtual machines",

        question:
            "Administrators require RDP and SSH connectivity to Azure " +
            "VMs through the Azure portal. The VMs must not have public " +
            "IP addresses. Which service should you deploy?",

        options: [

            "Azure Bastion",

            "Azure Traffic Manager",

            "Azure Front Door",

            "Azure Files"

        ],

        answer: [0],

        explanation:
            "Azure Bastion provides managed RDP and SSH connectivity " +
            "to Azure VMs over their private IP addresses without " +
            "requiring each VM to expose a public IP."

    },



    /*
     * ========================================================
     * DOMAIN 5
     *
     * MONITOR AND MAINTAIN AZURE RESOURCES
     *
     * 7 QUESTIONS
     * 14% OF SIMULATED EXAM
     * ========================================================
     */


    {

        id: "AZ104-MONITORING-001",

        domain: "monitoring",

        type: "single",

        objective:
            "Configure Azure Monitor alerts",

        question:
            "When VM1 exceeds a CPU threshold, Azure Monitor must " +
            "send an email and trigger an automation workflow. Which " +
            "Azure Monitor component defines these notification and " +
            "automation destinations?",

        options: [

            "Action group",

            "Resource lock",

            "Management group",

            "Application security group"

        ],

        answer: [0],

        explanation:
            "Azure Monitor action groups define notification and " +
            "automation actions that can be triggered by alert rules."

    },


    {

        id: "AZ104-MONITORING-002",

        domain: "monitoring",

        type: "single",

        objective:
            "Configure and interpret monitoring of virtual machines",

        question:
            "You need to query collected Azure Monitor log data using " +
            "Kusto Query Language. Which resource commonly stores the " +
            "log data you query?",

        options: [

            "Log Analytics workspace",

            "Availability set",

            "Azure DNS zone",

            "Storage access tier"

        ],

        answer: [0],

        explanation:
            "Azure Monitor Logs commonly stores data in a Log Analytics " +
            "workspace, where it can be queried using KQL."

    },


    {

        id: "AZ104-MONITORING-003",

        domain: "monitoring",

        type: "single",

        objective:
            "Configure and interpret monitoring",

        question:
            "You need recommendations that identify underutilised " +
            "Azure resources and opportunities to reduce cost. Which " +
            "service should you review?",

        options: [

            "Azure Advisor",

            "Azure Bastion",

            "Azure Files",

            "Network security groups"

        ],

        answer: [0],

        explanation:
            "Azure Advisor analyses Azure configurations and usage " +
            "and provides recommendations across areas including cost, " +
            "reliability, security, performance and operational excellence."

    },


    {

        id: "AZ104-MONITORING-004",

        domain: "monitoring",

        type: "single",

        objective:
            "Configure monitoring of virtual machines",

        question:
            "You need to collect supported guest operating-system " +
            "telemetry from Azure VMs and send it to Azure Monitor. " +
            "Which agent should you deploy for current Azure Monitor " +
            "data collection scenarios?",

        options: [

            "Azure Monitor Agent",

            "Azure Bastion Agent",

            "Azure DNS Agent",

            "Azure Policy Agent"

        ],

        answer: [0],

        explanation:
            "Azure Monitor Agent is used with data collection rules " +
            "to collect supported monitoring data from Azure and " +
            "hybrid machines."

    },


    {

        id: "AZ104-MONITORING-005",

        domain: "monitoring",

        type: "multi",

        objective:
            "Configure Azure Monitor alerts",

        question:
            "Which TWO actions are part of a typical Azure Monitor " +
            "alert configuration?",

        options: [

            "Evaluate a metric or log-query condition.",

            "Invoke an action group when the alert criteria are met.",

            "Create a new Microsoft Entra tenant.",

            "Convert the subscription into a management group."

        ],

        answer: [0, 1],

        explanation:
            "Azure Monitor alert rules evaluate supported signals or " +
            "queries and can trigger action groups when their criteria " +
            "are satisfied."

    },


    {

        id: "AZ104-MONITORING-006",

        domain: "monitoring",

        type: "single",

        objective:
            "Monitor networks",

        question:
            "Users report intermittent connectivity to VM1. You need " +
            "Azure-native network diagnostic capabilities including " +
            "connection troubleshooting and packet capture. Which " +
            "service should you use?",

        options: [

            "Network Watcher",

            "Azure Advisor",

            "Azure Policy",

            "Microsoft Entra ID"

        ],

        answer: [0],

        explanation:
            "Azure Network Watcher provides monitoring and diagnostic " +
            "capabilities for Azure networking, including connection " +
            "troubleshooting and packet capture."

    },


    {

        id: "AZ104-MONITORING-007",

        domain: "monitoring",

        type: "single",

        objective:
            "Configure and interpret monitoring",

        question:
            "Operations staff need an interactive visual report that " +
            "combines Azure Monitor metrics, log queries and explanatory " +
            "text. Which feature should you use?",

        options: [

            "Azure Monitor Workbooks",

            "A storage account access key",

            "An NSG service tag",

            "A resource lock"

        ],

        answer: [0],

        explanation:
            "Azure Monitor Workbooks provide interactive visual reports " +
            "that can combine monitoring data, metrics, queries and text."

    }

];



/*
 * ============================================================
 * RUNTIME VALIDATION
 * ============================================================
 *
 * We validate the question bank when this file loads.
 *
 * This prevents a future edit from silently changing the
 * intended exam weighting.
 *
 * ============================================================
 */


(function validateAZ104QuestionBank() {

    const domainCounts = {

        identity: 0,

        storage: 0,

        compute: 0,

        networking: 0,

        monitoring: 0

    };


    const questionIds =
        new Set();


    /*
     * ========================================================
     * VALIDATE TOTAL QUESTION COUNT
     * ========================================================
     */


    if (
        AZ104_QUESTIONS.length !==
        AZ104_EXAM.questionCount
    ) {

        throw new Error(

            "AZ-104 question-bank error: expected " +
            AZ104_EXAM.questionCount +
            " questions but found " +
            AZ104_QUESTIONS.length +
            "."

        );

    }


    /*
     * ========================================================
     * VALIDATE EACH QUESTION
     * ========================================================
     */


    AZ104_QUESTIONS.forEach((question) => {


        /*
         * ID
         */


        if (
            !question.id ||
            typeof question.id !== "string"
        ) {

            throw new Error(
                "AZ-104 question-bank error: question without valid ID."
            );

        }


        /*
         * Duplicate IDs.
         */


        if (
            questionIds.has(
                question.id
            )
        ) {

            throw new Error(

                "AZ-104 question-bank error: duplicate ID " +
                question.id

            );

        }


        questionIds.add(
            question.id
        );


        /*
         * Domain.
         */


        if (
            !Object.prototype.hasOwnProperty.call(
                AZ104_EXAM.domains,
                question.domain
            )
        ) {

            throw new Error(

                "AZ-104 question-bank error: unknown domain " +
                question.domain +
                " on " +
                question.id

            );

        }


        domainCounts[
            question.domain
        ]++;


        /*
         * Type.
         */


        if (
            question.type !== "single" &&
            question.type !== "multi"
        ) {

            throw new Error(

                "AZ-104 question-bank error: unsupported question type on " +
                question.id

            );

        }


        /*
         * Options.
         */


        if (
            !Array.isArray(
                question.options
            ) ||
            question.options.length < 2
        ) {

            throw new Error(

                "AZ-104 question-bank error: invalid options on " +
                question.id

            );

        }


        /*
         * Answers.
         */


        if (
            !Array.isArray(
                question.answer
            ) ||
            question.answer.length === 0
        ) {

            throw new Error(

                "AZ-104 question-bank error: missing answer on " +
                question.id

            );

        }


        /*
         * Single-answer questions must have exactly
         * one correct answer.
         */


        if (
            question.type === "single" &&
            question.answer.length !== 1
        ) {

            throw new Error(

                "AZ-104 question-bank error: single-answer question " +
                question.id +
                " has multiple correct answers."

            );

        }


        /*
         * Validate answer indexes.
         */


        question.answer.forEach(
            (answerIndex) => {

                if (
                    !Number.isInteger(
                        answerIndex
                    ) ||
                    answerIndex < 0 ||
                    answerIndex >=
                    question.options.length
                ) {

                    throw new Error(

                        "AZ-104 question-bank error: invalid answer index on " +
                        question.id

                    );

                }

            }
        );

    });



    /*
     * ========================================================
     * VALIDATE DOMAIN QUESTION COUNTS
     * ========================================================
     */


    Object.entries(
        AZ104_EXAM.domains
    ).forEach(
        ([domainId, domain]) => {


            const actual =
                domainCounts[
                    domainId
                ];


            const expected =
                domain.simulatorQuestions;


            if (
                actual !== expected
            ) {

                throw new Error(

                    "AZ-104 weighting error for " +
                    domain.name +
                    ": expected " +
                    expected +
                    " questions but found " +
                    actual +
                    "."

                );

            }


            /*
             * Calculate actual simulator percentage.
             */


            const percentage =
                (
                    actual /
                    AZ104_EXAM.questionCount
                ) * 100;


            /*
             * Make sure our simulator allocation remains
             * inside Microsoft's published range.
             */


            if (
                percentage <
                domain.minWeight ||
                percentage >
                domain.maxWeight
            ) {

                throw new Error(

                    "AZ-104 weighting error: " +
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



    /*
     * ========================================================
     * SUCCESS
     * ========================================================
     */


    console.info(
        "[365in5] AZ-104 question bank validated."
    );


    console.info(
        "[365in5] AZ-104 weighting:",
        domainCounts
    );

})();



/*
 * ============================================================
 * EXPOSE EXAM DATA TO SIMULATOR
 * ============================================================
 *
 * app.js only talks to EXAM_CONFIG and EXAM_QUESTIONS.
 *
 * That means when we later build MD-102:
 *
 * questions/md-102.js
 *
 * can expose exactly the same interface without rewriting
 * simulator.html or app.js.
 *
 * ============================================================
 */


window.EXAM_CONFIG =
    AZ104_EXAM;


window.EXAM_QUESTIONS =
    AZ104_QUESTIONS;
